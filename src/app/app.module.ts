import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserModule } from './user/user.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './pages/home.module';
import { MaterialModule } from './shared/material.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/navbar.component';
import { AppRoutingModule } from './routes';
import { ServicesComponent } from './pages/services.component';
import { AuthService } from './user/auth.service';
import { Error404Component } from './errors/404.component';
import { DataService } from './data.service';
import { CardsComponent } from './cards/cards.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ServicesComponent,
    Error404Component,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    UserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule


  ],
  providers: [
    AuthService,
    DataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
