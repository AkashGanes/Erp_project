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
    id: "",
    date: "",
    leave: "",

  };
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

}
