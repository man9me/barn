import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs";
import { inherits } from "util";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number; name: string };
  paramsSubscription: Subscription;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params["id"],
      name: this.route.snapshot.params["name"],
    };
    console.log(this.user);

    // without subscribe angular dont recreate component after inits, subscribe or on change
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      (this.user.id = params["id"]), (this.user.id = params["name"]);
    });
  }
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
    //router will destroyt on hisown regardles, but on other ocasions with self proclamated observebles its nessesary to clean it up
  }
}
