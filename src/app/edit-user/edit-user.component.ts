import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../user.service";
import { User } from "../user";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "dream-edit-user",
  templateUrl: "./edit-user.component.html",
  styleUrls: ["./edit-user.component.css"]
})
export class EditUserComponent implements OnInit {
  userDetail: User;
  userForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: UserService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    let userid = this.route.snapshot.paramMap.get("userid");
    this.service.getUserById(userid).subscribe(response => {
      console.log(response);
      this.userDetail = response;
      // to set all the from values in formGroup
      this.userForm.setValue(this.userDetail);
    });

    this.userForm = this.fb.group({
      id: [""],
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
    this.service.updateUser(this.userForm.value).subscribe(data => {
      this.router.navigate(["list-user"]);
    });
  }
}
