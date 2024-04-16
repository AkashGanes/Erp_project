import { Component } from '@angular/core';
import { AdminComponent } from '../admin/admin.component';
import { LoginSignupService } from '../service/login-signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrl: './listuser.component.scss'
})
export class ListuserComponent {
  constructor(public loginService:LoginSignupService,public admin:AdminComponent,public router:Router){
   
    this.getAll()
  }

  updateUser={
    id:"",
    userName:"",
    lastName:"",
    email:"",
    password:"",
    phoneNumber:""
}
  allUserDetails:any=[]
  id!:number
  getAll(){
    this.loginService.getAll().subscribe((resp)=>{
      // console.log(resp)
      this.allUserDetails=resp
    })
  }
  update(id:number){
    // this.admin.edit(id);
    // this.loginService.getId(id)
    this.router.navigate(['/admin',id])
}
deleteCall(id:number){
this.id=id
}
delete(){
  console.log(this.id)
  this.loginService.delete(this.id).subscribe((resp)=>{
    console.log(resp)
    alert(resp)
    this.getAll();
  })
}
}
