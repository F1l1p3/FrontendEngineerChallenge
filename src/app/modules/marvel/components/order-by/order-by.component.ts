import { orderby } from "./../../../../core/util/selects.constants";
import { Component, Output, EventEmitter } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-order-by",
  templateUrl: "./order-by.component.html",
  styleUrls: ["./order-by.component.css"],
})
export class OrderByComponent {
  @Output("selectEvent") selectEvent = new EventEmitter<string>();
  util = orderby;
  constructor(public fb: FormBuilder) {}

  selectedForm = this.fb.group({
    selected: [""],
  });

  changeSelect() {
    this.selectEvent.emit(this.selectedForm.controls["selected"].value);
  }
}
