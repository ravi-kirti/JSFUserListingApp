import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";

import { LoginModule } from "./login/login.module";

import { AppComponent } from "./app.component";
import { ListUsersComponent } from "./list-users/list-users.component";

import { UserService } from "./user.service";
import { AddUserComponent } from "./add-user/add-user.component";
import { HeaderComponent } from "./header/header.component";
import { EditUserComponent } from "./edit-user/edit-user.component";

@NgModule({
  // array of components , directives , pipes
  declarations: [
    AppComponent,
    ListUsersComponent,
    AddUserComponent,
    HeaderComponent,
    EditUserComponent
  ],

  // Dependent modules
  imports: [BrowserModule, AppRoutingModule, LoginModule], // module is loaded
  // Services required in a module
  providers: [UserService],
  // Entry Component. Root of a tree
  bootstrap: [AppComponent]
})
export class AppModule {}
