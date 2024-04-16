import { Component } from '@angular/core';
import { LoginSignupService } from '../service/login-signup.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(public loginSignup:LoginSignupService){

  }

loginUser={
    id:"",
    firstName:"",
    middleName:"",
    lastName:"",
    email:"",
    phoneNumber:""
}
signinUser={
  id:"",
  firstName: "",
  middleName: "",
  lastName: "",
  email: "",
  password: "",
  phoneNumber: ""
}
//  loginuser=this.loginSignup.signinuser.value
getLoginDetails(){
  this.loginSignup.loginuser.subscribe((resp:any)=>{
    this.loginUser=resp
    console.log(resp)
  })
 }
 getSigninDetails(){
  this.loginSignup.signinuser.subscribe((resp:any)=>{
    console.log(resp)
    this.signinUser=resp
  }
  )
 }

  ngOnInit(): void {
      // this.loginSignup.canAccess()
    if(this.loginSignup.loginuser!=null){
      this.getLoginDetails()
    }
    else if(this.loginSignup.signinuser!=null){
    this.getSigninDetails()
    }
    
    // console.log(this.signinUser)
    // console.log(this.loginuser)
  }
}
