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
import { Ng2SearchPipeModule } from '@ngx-maintenance/ng2-search-filter';
import { HolidayComponent } from './holiday/holiday.component';
import { HolidayPageComponent } from './holiday-page/holiday-page.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { AttendanceListComponent } from './attendance-list/attendance-list.component';

import { NgSelectModule} from '@ng-select/ng-select';

import { StaffInformationComponent } from './staff-information/staff-information.component';
<<<<<<< HEAD
import { ListstaffComponent } from './liststaff/liststaff.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { DemoComponent } from './demo/demo.component';
import { StaffViewComponent } from './staff-view/staff-view.component';

=======
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { AddconditionsComponent } from './addconditions/addconditions.component';
import { StaffmanagementlistComponent } from './staffmanagementlist/staffmanagementlist.component';
import { StaffViewComponent } from './staff-view/staff-view.component';
>>>>>>> bbd6a4ad2c134bde309f25877f447a7bd799024f










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
    AddUserComponent,
    HolidayComponent,
    HolidayPageComponent,
    AttendanceComponent,
    AttendanceListComponent,
<<<<<<< HEAD
    StaffInformationComponent,
    ListstaffComponent,
    DemoComponent,
    StaffViewComponent,
=======
    StaffComponent,
    AddStaffComponent,
    PersonalInformationComponent,
    EduQualificationComponent,
    UserConfirmationComponent,
    WorkExperienceComponent,
    StaffInformationComponent,
    StaffViewComponent,
    StaffmanagementlistComponent,
    TermsConditionsComponent,
    AddconditionsComponent
  
>>>>>>> bbd6a4ad2c134bde309f25877f447a7bd799024f
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
   NgxPaginationModule,
    Ng2SearchPipeModule,
    NgSelectModule,
    AutocompleteLibModule

  ],
  providers: [
    provideClientHydration(),LoginSignupService,LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
