import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Error404Component } from "./errors/404.component";
import { HomeComponent } from "./pages/home.componet";
import { ServicesComponent } from "./pages/services.component";

const appRoutes: Routes = [
  { path: 'user',
    loadChildren: () =>
      import('./user/user.module').then(m => m.UserModule)
  },
  { path: 'home',
    loadChildren: () =>
      import('./pages/home.module').then(m => m.HomeModule)
  },
  { path: 'services', component: ServicesComponent },
  { path: '', redirectTo: '/user/login', pathMatch: 'full' },
  { path: '**', component: Error404Component},

]

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
