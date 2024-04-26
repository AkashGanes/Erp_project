import { Component, OnInit } from '@angular/core';
import { LoginSignupService } from '../service/login-signup.service';
import { UserAuthService } from '../service/user-auth.service';
// import {JwtPayload, jwtDecode} from "jwt-decode";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  constructor(public loginSignup: LoginSignupService, public auth: UserAuthService) {

  }
  totalUsers!: number
  ngOnInit(): void {

    this.loginSignup.canAccess()
    this.loginSignup.getAll().subscribe((resp) => {
      this.totalUsers = resp.length
    })
    // loginUser={
    //     id:"",
    //     firstName:"",
    //     middleName:"",
    //     lastName:"",
    //     email:"",
    //     phoneNumber:""
    // }
    // signinUser={
    //   id:"",
    //   firstName: "",
    //   middleName: "",
    //   lastName: "",
    //   email: "",
    //   password: "",
    //   phoneNumber: ""
    // }
    //  loginuser=this.loginSignup.signinuser.value
    // getLoginDetails(){
    //   this.loginSignup.loginuser.subscribe((resp:any)=>{
    //     this.loginUser=resp
    //     console.log(resp)
    //   })
    //  }
    //  getSigninDetails(){
    //   this.loginSignup.signinuser.subscribe((resp:any)=>{
    //     console.log(resp)
    //     this.signinUser=resp
    //   }
    //   )
    //  }


    // let token:any=this.auth.getToken()
    // const decodedToken :any= jwtDecode(token);
    // console.log(decodedToken.user_id)

    // if(this.loginSignup.loginuser!=null){
    //   this.getLoginDetails()
    // }
    // else if(this.loginSignup.signinuser!=null){
    // this.getSigninDetails()
    // }

    // console.log(this.signinUser)
    // console.log(this.loginuser)
  }
}
