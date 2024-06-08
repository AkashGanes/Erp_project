import { Component, OnInit } from '@angular/core';
import { LoginSignupService } from '../service/login-signup.service';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrl: './terms-conditions.component.scss'
})
export class TermsConditionsComponent implements OnInit {
formData = {
    id: "",
    terms: ""
  };
  submit = false
  errorMessage = ""
  conditions: any;
  id!: number;

constructor(private loginService: LoginSignupService) {


  }
  ngOnInit(): void {
    this.getConditions()
  }
  getConditions() {
    this.loginService.getAllTermsAndConditions().subscribe((resp) => {
      // console.log(resp)
      this.conditions = resp
    });
  }
  deleteConditions(id:number){
    this.id=id
  }
  confirmDelete(){
    
      this.loginService.deleteTermsAndConditions(this.id).subscribe(res=>{
        console.log(res)
        alert(res)
        this.getConditions()
      })
      
     
  }

}
