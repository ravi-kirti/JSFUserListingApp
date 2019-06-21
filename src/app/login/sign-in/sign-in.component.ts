import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthenticationService } from "../../authentication.service";
import { User } from "../../user";

@Component({
    selector: "dream-sign-in",
    templateUrl: "./sign-in.component.html",
    styleUrls: ["./sign-in.component.css"],
    providers: [AuthenticationService] // service is available to the component and its children
})
export class SignInComponent implements OnInit {
    imgUrl: string;
    loginForm: FormGroup; // entire form
    submitted: boolean;
    invalidLogin: boolean;
    guestStatus: boolean;
    user: User;

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private authService: AuthenticationService
    ) {
        this.imgUrl = '../../assets/user.png';
    }

    ngOnInit() {
        // initialize the component
        this.loginForm = this.fb.group({
            // creating a form , grouping all the form-controls together
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    validate() {
        // console.log(this.email + "  " + this.password);
        let useremail = this.loginForm.controls.email.value;
        let userpassword = this.loginForm.controls.password.value;

        this.submitted = true;

        if (this.loginForm.invalid) {
            // loginForm has the status , validity and the values of the esntire form
            // form validation
            return;
        }

        this.authService
            .validateByEmail(useremail, userpassword)
            .subscribe(response => {
                console.log('**********' + response.name);
                this.user = response; // extracting the user object from the response
                if (this.user !== undefined && this.user != null) {
                    // admin role -- super user
                    if (this.user.rollname === 'super') {
                        this.guestStatus = false;
                        this.router.navigate(['list-user']);
                    } else {
                        // guest user
                        this.guestStatus = true;
                        // displaying details of the user onto the same page
                        // via the child component
                    }
                } else {
                    this.invalidLogin = true; // invalid credentials
                }
            }, (error: any) => {
                this.invalidLogin = true;
                console.error(error);
            });
        // navigate to the List of users....

    }
}
