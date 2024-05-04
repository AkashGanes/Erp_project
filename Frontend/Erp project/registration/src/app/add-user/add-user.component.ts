import { Component } from '@angular/core';
import { LoginSignupService } from '../service/login-signup.service';
import { ActivatedRoute, Router } from '@angular/router';

import { UserAuthService } from '../service/user-auth.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  public constructor(private loginService: LoginSignupService, private routing: Router, public auth: UserAuthService) { }

  submit=false
  ngOnInit(): void {


    if (this.auth.getRoles() != null) {
      this.userRole = this.auth.getRoles()[0].roleName
      console.log(this.userRole)
    }


    // if(this.loginService.id!=null){
    //   this.edit()
    // }
    // else{
    //   this.data=sessionStorage.getItem('user')
    //   this.updateUser=JSON.parse(this.data)
    //   console.log(this.updateUser)
    // }
    // this.id = this.router.snapshot.params['id'];


    this.loginService.getAllRoles().subscribe((resp: any) => {
      this.allRoles = resp
      console.log(resp)
    })
  }
  selectedRole=''
  userRole: any
  id!: number
  data: any;
  allRoles: any = []
  user: any = {
    userName: "",
    lastName: "",
    email: "",
    password:"",
    phoneNumber:0,
    role: [
      {
        roleName: "Employee",
        roleDescription: ""
      }
    ]
  }

addUser() {
    this.loginService.save(this.user).subscribe(
      (resp:any)=>{
        console.log(resp)
        if(resp.message=="successfully registered"){
       
          alert("User has successfully been added")
          this.routing.navigate(['/listuser'])
        }else{
          alert()
        }
  })
}
  changeRole(e: any) {
    this.user.role[0].roleName = e.target.value
    console.log(e.target.value)
    console.log(this.user)
    console.log(this.selectedRole)
  }
}
