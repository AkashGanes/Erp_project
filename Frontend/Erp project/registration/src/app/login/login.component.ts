import { Component } from '@angular/core';
import { LoginSignupService } from '../service/login-signup.service';
import { Router } from '@angular/router';
import { error } from 'node:console';
import { UserAuthService } from '../service/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private loginService:LoginSignupService ,public router:Router,public userAuthService:UserAuthService){}
  ngOnInit(): void {
   this.loginService.canAuthenticate()
  this.loginService.getAllRoles().subscribe((resp)=>{
    this.roles=resp
  })
  }
  loginData={
    email:"",
    password:""
  }
  roles!:any
  public user={
    id:"",
    userName:"",
    lastName:"",
    email:"",
    phoneNumber:""
  }
  submit=false
  loading=false
  errorMessage=""

  onSubmit(formGroup:any){

    this.loading=true
    this.loginService.get(this.loginData).subscribe((resp:any)=>{
      console.log(resp)
      console.log(this.roles)
      this.userAuthService.setRoles(resp.loginPage.role);
      this.userAuthService.setToken(resp.jwtToken);

      const role = resp.loginPage.role[0].roleName;

    for(let i=0; i<this.roles.length; i++){
      if(role==this.roles[i].roleName){
        if (role == 'Super Admin') {
          alert("login succesfully")
          this.router.navigate(['/dashboard']);
        } else if (role=='HR'){
          alert("login succesfully")
          this.router.navigate(['/dashboard'])
        }else if(role=='Admin'){
          alert("login succesfully")
          this.router.navigate(['/dashboard'])
        }else{
          alert("login succesfully")
          this.router.navigate(['/dashboard'])
        }
      }
    }
      // if(resp!=null){
      // //  this.user=resp
      //     alert("login succesfully")
      //     this.loginService.isAuthenticated=true
      //     console.log(resp)
      //      formGroup.reset()
      //      this.router.navigate(['/listuser'])
      //       // this.loginService.canAuthenticate()
      // }
      // else{
      //       this.loading=false
      //       alert("user not found")
      // }
    },
    (error)=>{
      console.log(error.error.error)
      this.loading=false
      alert("user not found")
    })

    // this.loading=true
  //  this.loginService.get().subscribe(resp=>{
  //   const user=resp.find((a:any)=>{
  //     return a.email==formGroup.value.email && a.password==formGroup.value.password
  //   });
  //   if(user){
  //     alert("login succesfully")
  //     formGroup.reset()
  //     this.loginService.isAuthenticated=true
  //     this.router.navigate(['dashboard'])
  //   }
  //   else{
  //     alert("user not found")
  //   }
  //  })
  //   this.loading=true
  // }
  }
}
