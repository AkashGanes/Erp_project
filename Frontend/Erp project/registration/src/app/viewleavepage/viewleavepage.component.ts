import { Component } from '@angular/core';
import { LoginSignupService } from '../service/login-signup.service';
import { UserAuthService } from '../service/user-auth.service';
import { jwtDecode, JwtPayload } from 'jwt-decode';

@Component({
  selector: 'app-viewleavepage',
  templateUrl: './viewleavepage.component.html',
  styleUrl: './viewleavepage.component.scss'
})
export class ViewleavepageComponent {
  allLeaves: any;
  currentPage: number = 1; // Initialize currentPage to 1
  noramlUser:any={
    id:0,
    userName:"",
    leaveform:[{
      id:0,
      leaveType: "",
      startDate: "",
      endDate: "",
      total: "",
      remarks: ""
    }]

  }
  normalUserId!:any
  token:any
  constructor(public loginService:LoginSignupService,public auth:UserAuthService){
   
    
  }

  ngOnInit(): void {
    if(this.loginService.roleMatch(['Super Admin','Admin','HR'])){
      this.getAny()
      console.log(this.allLeaves)
    }else{
      
        // this.normalUserId=this.auth.decodeToken()
        // this.getById(this.normalUserId)
        this.token=this.auth.getToken()
        if(this.token!=null){
          // console.log(this.token)
          const decodedToken:any= jwtDecode<JwtPayload>(this.token);
          // console.log(decodedToken)
          this.getById(decodedToken.user_id)
        
        }
      
      
    } 
  }
  getAny() {
    this.loginService.getLeaveDetails().subscribe((resp)=>{
      this.allLeaves=resp
      console.log(resp)
    })
  }
  getById(id:number){
    this.loginService.getLeaveDetailsById(id).subscribe((resp:any)=>{
      this.noramlUser=resp
      console.log(this.noramlUser)
    })
  }

}
