import { Component } from '@angular/core';
import { LoginSignupService } from '../service/login-signup.service';
import { UserAuthService } from '../service/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leavepage',
  templateUrl: './leavepage.component.html',
  styleUrl: './leavepage.component.scss'
})
export class LeavepageComponent {
  constructor(private loginService:LoginSignupService,private auth:UserAuthService,private router:Router){}
  ngOnInit(): void {
    
   this.decodeToken= this.auth.decodeToken()
  if(this.decodeToken!=null){
    this.userId=this.decodeToken.user_id
  }
  }
  userId!:any
  decodeToken:any
  submit=false
  errorMessage=""
  loading=false
  formData={
        id:"" ,
        employeName:"" ,
        leaveType:"", 
        startDate: "",
        endDate:"" ,
        total: "",
        remarks:""  
      }
    
      onSubmit(formGroup:any){
        this.loginService.saveLeaveForm(this.formData,this.userId).subscribe(
          (resp)=>{
            if(resp!=null){
            
            formGroup.reset()
            alert("Leave Applied successfully..")
            // console.log(resp)

            formGroup.reset()
            this.router.navigate(['/viewleavepage'])
            this.loading=false
            }
            else{
              alert("something went wrong ")
              this.loading=false
            }
            
          }
        )
        this.loading=true
      }
changeType(e: any){
  this.formData.leaveType=e.target.value
console.log(e.target.value)
}

}
