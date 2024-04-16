import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListuserComponent } from './listuser/listuser.component';
import { AdminComponent } from './admin/admin.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'listuser',component:ListuserComponent},
  {path:'admin/:id',component:AdminComponent},
  {path:'change-password/:id',component:ChangePasswordComponent},
  {path:'invoice',component:InvoiceComponent},
  {path:'admindashboard',component:AdmindashboardComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
