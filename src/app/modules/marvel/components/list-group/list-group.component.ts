import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-list-group",
  templateUrl: "./list-group.component.html",
  styleUrls: ["./list-group.component.css"],
})
export class ListGroupComponent implements OnInit {
  @Input() profileResults: any;
  constructor() {}

  ngOnInit() {}
}
