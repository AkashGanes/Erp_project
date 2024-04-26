import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../service/user-auth.service';
import { Router } from '@angular/router';
import { JwtPayload, jwtDecode } from 'jwt-decode';
import { LoginSignupService } from '../service/login-signup.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
constructor(public authService:UserAuthService,public router:Router,public loginService:LoginSignupService){}
token!:string
user={
  id:0,
  userName:"",
  lastName:"",
  email:"",
  phoneNumber:0,
  role:[
    {
      roleName:"",
      roleDescription:""
    }
  ]
}
  ngOnInit(): void {
    this.token=this.authService.getToken()
    if(this.token!=null){
      // console.log(this.token)
      const decodedToken:any= jwtDecode<JwtPayload>(this.token);
      // console.log(decodedToken)
      this.loginService.getById(decodedToken.user_id).subscribe((resp:any)=>{
        this.user=resp
      })
    }
   

  }

logOut(){
  this.authService.clear()
  this.router.navigate(['/login'])
}
}
