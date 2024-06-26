import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListuserComponent } from './listuser/listuser.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { authGuard } from './auth/auth.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LeavepageComponent } from './leavepage/leavepage.component';
import { ViewleavepageComponent } from './viewleavepage/viewleavepage.component';
import { EditpageComponent } from './editpage/editpage.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HolidayComponent } from './holiday/holiday.component';
import { HolidayPageComponent } from './holiday-page/holiday-page.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { AttendanceListComponent } from './attendance-list/attendance-list.component';
<<<<<<< HEAD
import { StaffInformationComponent } from './staff-information/staff-information.component';
<<<<<<< HEAD
import { ListstaffComponent } from './liststaff/liststaff.component';
import { DemoComponent } from './demo/demo.component';
import { StaffViewComponent } from './staff-view/staff-view.component';

=======
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { AddconditionsComponent } from './addconditions/addconditions.component';
import { StaffmanagementlistComponent } from './staffmanagementlist/staffmanagementlist.component';
import { StaffViewComponent } from './staff-view/staff-view.component';
>>>>>>> bbd6a4ad2c134bde309f25877f447a7bd799024f
=======
import { InformationComponent } from './information/information.component';
>>>>>>> 52a39e44a4bea9d622ccac9e0d85ad81dd0dceac


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'listuser',component:ListuserComponent,canActivate:[authGuard],data:{roles:['Super Admin','Admin']}},
  {path:'edit/:id',component:EditpageComponent,canActivate:[authGuard],data:{roles:['Super Admin','Admin']}},
  {path:'change-password/:id',component:ChangePasswordComponent,canActivate:[authGuard],data:{roles:['Super Admin','Admin']}},
  {path:'invoice',component:InvoiceComponent},
  {path:'forbidden',component:ForbiddenComponent},
  {path:'adduser',component:AddUserComponent},
  {path:'leavepage',component:LeavepageComponent},
  {path:'viewleavepage',component:ViewleavepageComponent},
  {path:'holiday',component:HolidayComponent},
  {path:'holidaypage',component:HolidayPageComponent},
  {path:'attendance',component:AttendanceComponent},
  {path:'attendancelist',component:AttendanceListComponent},
<<<<<<< HEAD
<<<<<<< HEAD
  {path:'addstaff',component:StaffInformationComponent},
  {path:'liststaff',component:ListstaffComponent},
  {path:'demo',component:DemoComponent},
  {path:'viewstaff/:id',component:StaffViewComponent},
  
=======
  {path:'stafflist',component:StaffComponent},
  {path:'addstaff',component:AddStaffComponent},
  {path:'work-exp',component:WorkExperienceComponent},
  {path:'personal-information',component:PersonalInformationComponent},
  {path:'edu-qualification',component:EduQualificationComponent},
  {path:'user-confirmation',component:UserConfirmationComponent},
  {path:'staff',component:StaffInformationComponent},
  {path:'staff-view',component:StaffViewComponent},
  {path:'staffmanagementlist',component:StaffmanagementlistComponent},
  {path:'terms-conditions',component:TermsConditionsComponent},
  {path:'addconditions',component:AddconditionsComponent},
>>>>>>> bbd6a4ad2c134bde309f25877f447a7bd799024f
=======
  {path:'information',component:InformationComponent},

>>>>>>> 52a39e44a4bea9d622ccac9e0d85ad81dd0dceac
  {path:'admindashboard',component:AdmindashboardComponent,canActivate:[authGuard],data:{roles:['Super Admin']}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
