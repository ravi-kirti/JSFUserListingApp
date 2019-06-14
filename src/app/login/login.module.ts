import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SignInComponent } from "./sign-in/sign-in.component";
import { DisplayUserComponent } from "../display-user/display-user.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [SignInComponent, DisplayUserComponent],
  // dependent modules
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  // exposing the Sign in Component and ReactiveFormsModule and HttpClientModule
  exports: [
    SignInComponent,
    DisplayUserComponent,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class LoginModule {}
