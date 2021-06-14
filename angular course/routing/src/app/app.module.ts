import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersService } from "./servers/servers.service";
import { Router, RouterModule, Routes } from "@angular/router";
import { Page404Component } from "./page404/page404.component";
import { AppRoutingModule } from "./app-routing.module";
import { AuthGuard } from "./users/auth-guard.service";
import { AuthService } from "./users/auth.service";
import { CanDeactivateGuard } from "./servers/edit-server/saved-guard.service";
import { Err404Component } from "./err404/err404.component";
import { ServerResolver } from "./servers/server/server-resolver.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    Page404Component,
    Err404Component,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [
    ServersService,
    AuthGuard,
    AuthService,
    CanDeactivateGuard,
    ServerResolver,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
