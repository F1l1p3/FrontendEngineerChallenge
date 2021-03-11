import { subject } from "./core/util/selects.constants";
import { IOptionImg } from "./core/interface/IOptionImg";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "FrontendEngineerChallenge";
  listOptions: Array<IOptionImg>;

  constructor() {
    this.listOptions = subject;
  }
}
