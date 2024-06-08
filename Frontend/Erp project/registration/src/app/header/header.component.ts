import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../service/user-auth.service';
import { Router } from '@angular/router';
import { JwtPayload, jwtDecode } from 'jwt-decode';
import { LoginSignupService } from '../service/login-signup.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
constructor(public authService:UserAuthService,public router:Router,public loginService:LoginSignupService,private  sanitizer: DomSanitizer){}
token!:string
user_id!:number
url!:any;
image:any;
user:any={
  id:0,
  userName:"",
  lastName:"",
  email:"",
  phoneNumber:0,
  image:{},
  role:[
    {
      roleName:"",
      roleDescription:""
    }
  ]
}
  ngOnInit(): void {
    this.token=this.authService.getToken()
    if(this.token!=null){
      // console.log(this.token)
      const decodedToken:any= jwtDecode<JwtPayload>(this.token);
      this.user_id=decodedToken?.user_id
      // console.log(decodedToken)
      this.loginService.getById(this.user_id).subscribe((resp:any)=>{
        this.user=resp
        console.log(resp)
        this.getImage()
      })
    }
  }
getImage(){
  const img_id=this.user?.image?.id
  if(img_id!=null){
    this.loginService.getImage(img_id).subscribe((resp:Blob)=>{
      const contentType = resp.type;
      console.log(resp.type)
      const blob = new Blob([resp], { type: contentType})
      this.url =window.URL.createObjectURL(blob);
      this.image=this.sanitizer.bypassSecurityTrustResourceUrl(this.url)
})
  }
}

logOut(){
  this.authService.clear()
  this.router.navigate(['/login'])
}
}
