import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NavBarComponent } from "../nav/navbar.component";
import { MaterialModule } from "../shared/material.module";
import { AddProfileComponent } from "./add-profile/add-profile.component";
import { LoginComponent } from "./login.component";
import { ProfileComponent } from "./profile.component";
import { UserRoutingModule } from "./user.routes";
import { ProfileDataFormComponent } from './profile-data-form/profile-data-form.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';


@NgModule({
  declarations: [
    LoginComponent,
    ProfileComponent,
    AddProfileComponent,
    ProfileDataFormComponent,
    EditProfileComponent,

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ],
})

export class UserModule { }
