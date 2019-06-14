import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListUsersComponent } from "./list-users/list-users.component";
import { AddUserComponent } from "./add-user/add-user.component";
import { SignInComponent } from "./login/sign-in/sign-in.component";
import { EditUserComponent } from "./edit-user/edit-user.component";

const routes: Routes = [
  // array of Route object, meant for navigation
  // mapping between the Urls and the components
  { path: "", redirectTo: "/sign-in", pathMatch: "full" },
  { path: "sign-in", component: SignInComponent },
  { path: "list-user", component: ListUsersComponent },
  { path: "add-user", component: AddUserComponent },
  { path: "edit-user/:userid", component: EditUserComponent }
];

@NgModule({
  // configure the routes when the module is loaded
  imports: [RouterModule.forRoot(routes)],
  // which part of the module is exposed
  // export module, components, directives , pipes
  exports: [RouterModule]
})
export class AppRoutingModule {}
