import { Component, OnInit } from '@angular/core';
import { LoginSignupService } from '../service/login-signup.service';
import { UserAuthService } from '../service/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.scss'
})
export class AttendanceComponent implements OnInit{

  id ='';
  attendance={
    date :'',
    inTime: '',
    outTime: '',
    totalHours:  '',
    status: ''
  }
 
  userId!:any
  decodeToken:any
  clockedIn: boolean = false;
  clockedOut:boolean=false
  submit:boolean=false

  constructor(public loginService:LoginSignupService,public auth:UserAuthService,public router:Router){}
  ngOnInit(): void {
    
    this.decodeToken= this.auth.decodeToken()
  if(this.decodeToken!=null){
    this.userId=this.decodeToken.user_id
  }
  }

  clockInOut() {
    if(!this.clockedIn) {
      this.attendance.inTime = this.getCurrentTime();
      this.attendance.date = this.getCurrentDate();
      this.clockedIn = true;
      this.clockedOut=true
    }else if(this.clockedOut) {
      if(this.attendance.status.length>=8){
        this.attendance.outTime = this.getCurrentTime();
      this.calculateTotalTime();
      this.clockedOut=false
      this.submit=true
      }else this.submit=true
    }else if(this.submit && (this.attendance.status.length>=8)){
      console.log(this.attendance)
      this.loginService.saveAttendance(this.attendance,this.userId).subscribe((resp:any)=>{
        if(resp!=null){

          alert("successfylly saved")
          this.router.navigate(['/attendancelist'])
        }else{
          alert("something went wrong")
        }
      })
    }
  }

  calculateTotalTime() {
    const inTime = new Date(this.attendance.date + ' ' + this.attendance.inTime);
    const outTime = new Date(this.attendance.date + ' ' + this.attendance.outTime);
    const totalTimeMilliseconds = Math.abs(outTime.getTime() - inTime.getTime());
    const hours = Math.floor(totalTimeMilliseconds / (1000 * 60 * 60));
    const minutes = Math.floor((totalTimeMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
    this.attendance.totalHours = `${hours}:${minutes.toString().padStart(2, '0')}`;
  }

  getCurrentTime(): string {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  getCurrentDate(): string {
    const now = new Date();
    const year = now.getFullYear().toString();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  

  resetForm() {
  
    this.attendance.date = '';
    this.attendance.inTime = '';
    this.attendance.outTime = '';
    this.attendance.totalHours = '';
    this.clockedIn = false;
  }
}
