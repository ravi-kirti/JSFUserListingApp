import { Component, OnInit, Input } from "@angular/core";
import { User } from "../user";

@Component({
  selector: "dream-display-user",
  templateUrl: "./display-user.component.html",
  styleUrls: ["./display-user.component.css"]
})
export class DisplayUserComponent implements OnInit {
  // user object is refferred from the parent
  // property of the class
  @Input()userDetails: User;

  constructor() {}

  ngOnInit() {}
}
