import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Data } from "@angular/router";

@Component({
  selector: "app-err404",
  templateUrl: "./err404.component.html",
  styleUrls: ["./err404.component.css"],
})
export class Err404Component implements OnInit {
  errMsg: string = "";
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.errMsg = this.route.snapshot.data["massage"];
    this.route.data.subscribe((data: Data) => {
      this.errMsg = data["massage"];
    });
  }
}
