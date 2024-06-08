import { Component } from '@angular/core';
import { LoginSignupService } from '../service/login-signup.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addconditions',
  templateUrl: './addconditions.component.html',
  styleUrl: './addconditions.component.scss'
})
export class AddconditionsComponent {

  formData = {
    id: "",
    terms:""
    
    
  };
 submit=false
 errorMessage=""
sno: any;
terms: any;
  
  


  
 
  

 constructor(private loginService:LoginSignupService,private router:Router) { }



 onSubmit() {
  //  console.log(formGroup.value)
  console.log(this.conditions)
  this.loginService.saveTermsAndCondtions(this.conditions).subscribe(
     (resp)=>{
       console.log(resp)
       if(resp!=null){
       
      //  formGroup.reset()
       alert("successfully saved")
       this.router.navigate(['/terms-Conditions'])
       
       }
       else{
         alert("something went wrong ")
     }
   }
   )
   
 }
  

  conditions: { sno:number,terms: string}[] =[];
  

  addCondition() {
    const newSno = this.conditions.length > 0 ? this.conditions[this.conditions.length - 1].sno + 1 : 1;
    this.conditions.push({ sno: newSno,terms: ''});
    
    
  }

  removeCondition(index: number) {
    this.conditions.splice(index, 1);
    this.conditions.forEach((condition, i) => {
      condition.sno = i + 1;
    });
  }

}
