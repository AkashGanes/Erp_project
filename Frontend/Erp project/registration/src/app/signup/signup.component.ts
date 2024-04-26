import { Component, OnInit } from '@angular/core';
import { LoginSignupService } from '../service/login-signup.service';
import { UserAuthService } from '../service/user-auth.service';
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit {

  constructor(private loginService:LoginSignupService,public userAuthService:UserAuthService,public router:Router){}
  ngOnInit(): void {
    this.loginService.canAuthenticate()
  }
  submit=false
  errorMessage=""
  loading=false
  formData={
        id:"" ,
        userName:"" ,
        lastName: "",
        email:"" ,
        password: "",
        confirmPassword:"",
        phoneNumber:""  
      }
    
      onSubmit(formGroup:any){
        this.loading=true
        this.loginService.save(formGroup.value).subscribe(
          (resp:any)=>{
            // console.log(resp)
            if(resp.message=="successfully registered"){
              this.userAuthService.setRoles(resp.data.loginPage.role);
              this.userAuthService.setToken(resp.data.jwtToken);
              alert(resp.message)
              this.loginService.canAuthenticate()
            }else{
              alert(resp.message)
              this.errorMessage=resp.message
              this.loading=false
            }

            // this.router.navigate(['/dashboard'])

            // if(resp!=null){
            
            // formGroup.reset()
            // alert("successfully signed up")
            // // this.loginService.isAuthenticated=true
            // // console.log(resp)
            // this.loginService.canAuthenticate()
            // }
            // else{
            //   alert("something went wrong ")
            //   this.loading=false
            // }
            
          },
          (error)=>{
            console.log(error.error.error)
            alert('something went wrong')
          }
        )
       
      }
}
