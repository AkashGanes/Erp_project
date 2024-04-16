import { Component, OnInit } from '@angular/core';
import { LoginSignupService } from '../service/login-signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit {

  constructor(private loginService:LoginSignupService){}
  ngOnInit(): void {
    
  }
  submit=false
  errorMessage=""
  loading=false
  formData={
        id:"" ,
        firstName:"" ,
        middleName:"", 
        lastName: "",
        email:"" ,
        password: "",
        phoneNumber:""  
      }
    
      onSubmit(formGroup:any){
        this.loginService.save(formGroup.value).subscribe(
          (resp)=>{
            if(resp!=null){
            
            formGroup.reset()
            alert("successfully signed up")
            this.loginService.isAuthenticated=true
            // console.log(resp)
            this.loginService.canAuthenticate()
            }
            else{
              alert("something went wrong ")
              this.loading=false
            }
            
          }
        )
        this.loading=true
      }
}
