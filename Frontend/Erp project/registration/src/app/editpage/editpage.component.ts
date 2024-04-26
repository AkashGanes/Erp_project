import { Component, OnInit } from '@angular/core';
import { LoginSignupService } from '../service/login-signup.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAuthService } from '../service/user-auth.service';

@Component({
  selector: 'app-editpage',
  templateUrl: './editpage.component.html',
  styleUrl: './editpage.component.scss'
})
export class EditpageComponent implements OnInit{

  
  public constructor(private loginService: LoginSignupService, private router: ActivatedRoute, private routing: Router, public auth: UserAuthService) { }

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
    this.id = this.router.snapshot.params['id'];
    this.edit(this.id);

    this.loginService.getAllRoles().subscribe((resp: any) => {
      this.allRoles = resp
      // console.log(resp)
    })
  }
  userRole: any
  id!: number
  data: any;
  allRoles: any = []
  updateUser: any = {
    id: 0,
    userName: "",
    lastName: "",
    email: "",
    phoneNumber: 0,
    role: [
      {
        roleName: "",
        roleDescription: ""
      }
    ]
  }

  edit(id: number) {
    this.loginService.getById(id).subscribe((resp: any) => {
      // console.log(resp.role[0].roleName)
      this.updateUser = resp;
      //  sessionStorage.setItem('user',JSON.stringify(resp))

      // this.data=localStorage.getItem('')
      // this.updateUser=JSON.parse(this.data)
      // console.log(resp.id)
      // console.log(this.updateUser.firstName)
      // console.log(this.updateUser.email)
    })
  }

  update() {
    this.loginService.update(this.updateUser, this.id).subscribe((resp: any) => {
      if (resp != null) {
        alert('sucessfully updated')
        this.routing.navigate(['/listuser'])
      }
      else alert('something went wrong')
    })
  }
  changeRole(e: any) {
    this.updateUser.role[0].roleName = e.target.value
    console.log(e.target.value)
    console.log(this.updateUser)
  }
}
