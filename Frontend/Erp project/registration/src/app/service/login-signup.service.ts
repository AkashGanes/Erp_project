import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from './user-auth.service';


@Injectable({
  providedIn: 'root'
})
@Component({
  template: 'The href is: {{href}}'
  /*
  Other component settings
  */
})
export class LoginSignupService {
href: any;

  constructor(private router:Router,private http:HttpClient,private userAuthService:UserAuthService) { }

  API="http://localhost:8080/";

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });

  loginuser:any
  signinuser:any
  allDetails:any
  id!:number
  // isAuthenticated():boolean{
  //   if(this.loginuser!=null){
  //     return true
  //   }
  //   else if(this.signinuser!=null){
  //     return true
  //   }
  //   else return false
  // }
  // isAuthenticated=false
 
  
  // canAccess(){
  //   if(!this.isAuthenticated){
  //     this.router.navigate(['/login'])
  //   }
  // }
  // canAuthenticate(){
  //   if(this.isAuthenticated){
  //     this.router.navigate(['/dashboard'])
  //   }
  // }
  isAuthenticated():boolean{
    if (this.userAuthService.getToken()!=null) {
        return true;
    }
    return false;
  }

  canAccess(){
    if (!this.isAuthenticated()) {
        //redirect to login
        this.router.navigate(['/login']);
    }
  }
  canAuthenticate(){
    if (this.isAuthenticated()) {
      //redirect to dashboard
      this.router.navigate(['/dashboard']);
    }
  }

  save(data:any){
    return this.http.post(this.API+"save",data,{headers:this.requestHeader})
     
  }
  get(loginData:any){
    return this.loginuser=this.http.post(this.API+"authenticate",loginData,{headers:this.requestHeader})
  }
  getById(id:number){
    return this.http.get<Object>(this.API+"getById/"+id)
  }
  getAll(){
    return this.allDetails=this.http.get<any>(this.API+"getAll")
  }
  getId(getId:number){
    this.id=getId
  }
  update(updateUser:any,id:number){
    return this.http.put(this.API+'update/'+id ,updateUser)
  }
  delete(id:number){
    return this.http.delete(this.API+'delete/'+id, {responseType:'text'})
  }
  logOut(){
  this.userAuthService.clear()
  }

  getAllRoles(){
    return this.http.get(this.API+'getAllRoles')
  }

  saveLeaveForm(data:any,id:number){
    return this.http.post(this.API+"saveLeave/"+id,data)
  }
   roleMatch(allowedRoles:any):boolean {
    let isMatch = false;
    const userRoles:any = this.userAuthService.getRoles();

    if (userRoles != null) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          } 
        }
      }
    }
    return isMatch
  }

  getLeaveDetails(){
    return this.http.get(this.API+"getLeaveData")
  }
  getLeaveDetailsById(id:number){
    return this.http.get(this.API+"getLeaveDetails/"+id)

  }
}
