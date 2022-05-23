import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../shared/material.module";
import { HomeComponent } from "./home.componet";
import { HomeRoutingModule } from "./home.routes";
import { IPServiceComponent } from "./ipservice.component";
import { RedHatComponent } from "./redhat.component";
import { SuseComponent } from "./suse.component";
import { VSphereComponent } from "./vsphere.component";

@NgModule({
  declarations: [
    HomeComponent,
    IPServiceComponent,
    RedHatComponent,
    SuseComponent,
    VSphereComponent
    

  ],
  imports: [
    CommonModule,
    MaterialModule,
    HomeRoutingModule
  ]

})

export class HomeModule { }
