import { Component, OnInit } from '@angular/core';
import { ListuserComponent } from '../listuser/listuser.component';
import { LoginSignupService } from '../service/login-signup.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit {

  public constructor(private loginService:LoginSignupService,private router:ActivatedRoute,private routing:Router){}

  ngOnInit(): void {
    // if(this.loginService.id!=null){
    //   this.edit()
    // }
    // else{
    //   this.data=sessionStorage.getItem('user')
    //   this.updateUser=JSON.parse(this.data)
    //   console.log(this.updateUser)
    // }
    this.id=this.router.snapshot.params['id'];
    this.edit(this.id);

    this.loginService.getAllRoles().subscribe((resp:any)=>{
      this.allRoles=resp
      // console.log(resp)
    })
  }
  id!:number
  data:any;
  allRoles:any=[]
  updateUser:any={
    id:0,
    firstName:"",
    middleName:"",
    lastName:"",
    email:"",
    phoneNumber:0,
    role:[
      {
        roleName:"",
        roleDescription:""
      }
    ]
}

edit(id:number){  
this.loginService.getById(id).subscribe((resp:any)=>{
// console.log(resp.role[0].roleName)
this.updateUser=resp;
//  sessionStorage.setItem('user',JSON.stringify(resp))

// this.data=localStorage.getItem('')
// this.updateUser=JSON.parse(this.data)
// console.log(resp.id)
// console.log(this.updateUser.firstName)
// console.log(this.updateUser.email)
})
}

update(){
  this.loginService.update(this.updateUser,this.id).subscribe((resp:any)=>{
    if(resp!=null){
      alert('sucessfully updated')
      this.routing.navigate(['/listuser'])
    }
    else alert('something went wrong')
  })
}
changeRole(e:any){
  this.updateUser.role[0].roleName=e.target.value
  console.log(e.target.value)
  console.log(this.updateUser)
}
}
