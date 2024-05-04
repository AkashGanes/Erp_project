import { Component, OnInit } from '@angular/core';
import { LoginSignupService } from '../service/login-signup.service';
import { UserAuthService } from '../service/user-auth.service';
import { JwtPayload, jwtDecode } from 'jwt-decode';


@Component({
  selector: 'app-attendance-list',
  templateUrl: './attendance-list.component.html',
  styleUrl: './attendance-list.component.scss'
})
export class AttendanceListComponent implements OnInit{

  id!:number
  token:any
  userId:any
  attendance:any={
    id:0,
    userName:"",
    attendance:[{
      id:0,
      date: "",
      status: "",
      inTime: "",
      outTime: "",
      totalHours: ""
    }]

  }
  allAttendancelist: any;
  currentPage: number = 1; // Initialize currentPage to 1
  constructor(public loginService:LoginSignupService,public auth:UserAuthService){
   
    
  }
  ngOnInit(): void {
    if(this.loginService.roleMatch(['Super Admin','Admin','HR'])){
      this.getAny()
      console.log(this.allAttendancelist)
    }else{
        this.token=this.auth.getToken()
        if(this.token!=null){
          // console.log(this.token)
          const decodedToken:any= jwtDecode<JwtPayload>(this.token);
          // console.log(decodedToken)
          this.loginService.getAttendanceById(decodedToken.user_id).subscribe(resp=>this.attendance=resp)
        
        }
      
      
    } 
  }

  getAny() {
    this.loginService.getAllAttendance().subscribe((resp)=>{
      this.allAttendancelist=resp
    })
  }
  getAttendceById(id:number){
    this.loginService.getAttendanceById(id).subscribe(response=>{
      this.attendance=response
    })
  }
  deleteCall(id:number){
    this.id=id
  }
  deleteAttendance(){
    this.loginService.deleteAttendace(this.id).subscribe(resp=>{
      alert(resp)
      this.getAny()
    }
    )
  }
}


