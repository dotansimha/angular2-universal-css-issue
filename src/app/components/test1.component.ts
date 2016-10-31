import { Component } from "@angular/core";
import * as style from "./test1.component.scss";

@Component({
  selector: "test1",
  template: "<div>test 1 page</div>",
  styles: [ style ]
})
export class Test1Component {
  constructor() {

  }
}
