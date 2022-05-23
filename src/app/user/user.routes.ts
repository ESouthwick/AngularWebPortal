import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddProfileComponent } from "./add-profile/add-profile.component";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";

import { LoginComponent } from "./login.component";
import { ProfileComponent } from "./profile.component";

export const userRoutes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'addProfile', component: AddProfileComponent },
  { path: 'editProfile/:id', component: EditProfileComponent },

]
@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
