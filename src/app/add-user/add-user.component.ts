import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "../user";
import { UserService } from "../user.service";

@Component({
  selector: "dream-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.css"]
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _serv: UserService
  ) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ["", Validators.required],
      rollname: ["", Validators.required],
      username: ["", Validators.required],
      password: ["", Validators.required],
      email: ["", Validators.required],
      phone: ["", Validators.required],
      city: ["", Validators.required],
      zipcode: ["", Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }
    // form entries are valid....
    // insert at db.json file
    this._serv.adUser(this.userForm.value).subscribe(response => {
      // after adding user navigate back to the list-users page
      this.router.navigate(["list-user"]);
    });
  }
}
