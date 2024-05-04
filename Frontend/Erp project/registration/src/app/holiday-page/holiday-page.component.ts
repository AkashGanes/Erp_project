import { Component, OnInit } from '@angular/core';
import { LoginSignupService } from '../service/login-signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-holiday-page',
  templateUrl: './holiday-page.component.html',
  styleUrl: './holiday-page.component.scss'
})
export class HolidayPageComponent{

  formData = {
    id: "",
    date:"",
    leaveType: ""
    
  };
 submit=false
 errorMessage=""
sno: any;
date: any;
leaveType: any;
  
  


  
 
  

 constructor(private loginService:LoginSignupService,private router:Router) { }



 onSubmit(formGroup:any) {
   console.log(formGroup.value)
  this.loginService.saveHoliday(formGroup.value).subscribe(
     (resp)=>{
       console.log(resp)
       if(resp!=null){
       
       formGroup.reset()
       alert("successfully")
       this.router.navigate(['/holiday'])
       // this.loginService.isAuthenticated=true
       // // console.log(resp)
       // this.loginService.canAuthenticate()
       }
       else{
         alert("something went wrong ")
     }
   }
   )
   
 }
}
