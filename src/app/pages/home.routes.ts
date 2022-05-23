import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.componet";
import { IPServiceComponent } from "./ipservice.component";
import { RedHatComponent } from "./redhat.component";
import { SuseComponent } from "./suse.component";
import { VSphereComponent } from "./vsphere.component";



export const homeRoutes: Routes = [

  { path: 'ipservice', component: IPServiceComponent },
  { path: 'redhat', component: RedHatComponent },
  { path: 'suse', component: SuseComponent },
  { path: 'vsphere', component: VSphereComponent},
  { path: '', component: HomeComponent }

]
@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})

export class HomeRoutingModule { }
