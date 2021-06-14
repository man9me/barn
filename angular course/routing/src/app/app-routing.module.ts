import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Err404Component } from "./err404/err404.component";
import { HomeComponent } from "./home/home.component";
import { Page404Component } from "./page404/page404.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { CanDeactivateGuard } from "./servers/edit-server/saved-guard.service";
import { ServerResolver } from "./servers/server/server-resolver.service";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { AuthGuard } from "./users/auth-guard.service";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";

const appRoutes: Routes = [
  {
    path: "users",
    component: UsersComponent,
    children: [{ path: ":id/:name", component: UserComponent }],
  },
  { path: "", component: HomeComponent },

  {
    path: "servers",
    //canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: ServersComponent,
    children: [
      {
        path: ":id/edit",
        component: EditServerComponent,
        canDeactivate: [CanDeactivateGuard],
      },
      {
        path: ":id",
        component: ServerComponent,
        resolve: { server: ServerResolver },
      },
    ],
  },
  { path: "404", component: Err404Component, data: { massage: "Page suck" } },
  { path: "**", redirectTo: "404" },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
