import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ListuserComponent } from './listuser/listuser.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginSignupService } from './service/login-signup.service';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    AdminComponent,
    ListuserComponent,
    ChangePasswordComponent,
    InvoiceComponent,
    AdmindashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),LoginSignupService,AdminComponent,LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
