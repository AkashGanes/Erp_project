import { Component } from '@angular/core';
import { LoginSignupService } from '../service/login-signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liststaff',
  templateUrl: './liststaff.component.html',
  styleUrl: './liststaff.component.scss'
})
export class ListstaffComponent {
  constructor(public loginService:LoginSignupService,public router:Router){
   
    this.pagination()
  }

  index=1
  searchText=''
  pageSize!:number
  totalCount!:number
  currentPage: number = 1;
  updateUser={
    id:"",
    userName:"",
    lastName:"",
    email:"",
    password:"",
    phoneNumber:null,
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
    this.loginService.getAllBasicInformation().subscribe((resp)=>{
      // console.log(resp)
      this.allUserDetails=resp
      console.log(this.allUserDetails)
    })
  }
  view(id:number){
    // this.admin.edit(id);
    // this.loginService.getId(id)
    this.router.navigate(['/viewstaff',id])
}
deleteCall(id:number){
this.id=id
}
 delete(){
  console.log(this.id)
  this.loginService.delete(this.id).subscribe((resp)=>{
    console.log(resp)
    alert(resp)
    this.pagination()
  })
}
pagination(){
  this.loginService.paginationOfBasicInformation(this.currentPage).subscribe((resp:any)=>{
    // console.log(resp)
    this.allUserDetails=resp.listUser
    this.totalCount=resp.totalCount
    this.pageSize=resp.pageSize
    console.log(resp)
  })
}

renderPage(event:number){
  this.currentPage=event
  // console.log(this.currentPage)
  this.pagination()
//   this.loginService.pagination(event).subscribe((resp:any)=>{
//   this.allUserDetails=resp.listUser
//   console.log(resp)
// })
}
}
