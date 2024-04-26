import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListuserComponent } from './listuser/listuser.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginSignupService } from './service/login-signup.service';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { LeavepageComponent } from './leavepage/leavepage.component';
import { ViewleavepageComponent } from './viewleavepage/viewleavepage.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { EditpageComponent } from './editpage/editpage.component';
import { AddUserComponent } from './add-user/add-user.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    ListuserComponent,
    ChangePasswordComponent,
    InvoiceComponent,
    AdmindashboardComponent,
    ForbiddenComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    LeavepageComponent,
    ViewleavepageComponent,
    EditpageComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [
    provideClientHydration(),LoginSignupService,LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
