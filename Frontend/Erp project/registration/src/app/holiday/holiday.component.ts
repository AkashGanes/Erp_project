import { Component, OnInit } from '@angular/core';
import { LoginSignupService } from '../service/login-signup.service';

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrl: './holiday.component.scss'
})
export class HolidayComponent implements OnInit {

  currentPage: number = 1; // Initialize currentPage to 1
  formData = {
    // id: "",
    SNo: '',
    date: "",
    leave: "",

  };
  id!:number
  submit = false
  errorMessage = ""
  allUserLeave: any;
  allLeave: any;


  constructor(private loginService: LoginSignupService) {


  }
  ngOnInit(): void {
    this.getLeave()
  }
  getLeave() {
    this.loginService.getHoliday().subscribe((resp) => {
      // console.log(resp)
      this.allUserLeave = resp
    })
  }
 deleteCall(id:number){

  this.id=id
 }
 confirmDelete(){
  this.loginService.deleteHoliday(this.id).subscribe(res=>{
    console.log(res)
    alert(res)
    this.getLeave()
  })
  
 }
  }
  

