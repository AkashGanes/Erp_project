import { Component } from '@angular/core';
import { LoginSignupService } from '../service/login-signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrl: './listuser.component.scss'
})
export class ListuserComponent {
  constructor(public loginService:LoginSignupService,public router:Router){
   
    this.getAll()
  }

  currentPage: number = 1;
  updateUser={
    id:"",
    userName:"",
    lastName:"",
    email:"",
    password:"",
    phoneNumber:"",
    role:[
      {
        roleName:"",
        roleDescription:""
      }
    ]
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
    this.router.navigate(['/edit',id])
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
