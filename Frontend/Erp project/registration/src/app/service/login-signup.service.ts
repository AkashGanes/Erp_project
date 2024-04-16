import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from './user-auth.service';


@Injectable({
  providedIn: 'root'
})
export class LoginSignupService {

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
  isAuthenticated=false
 
  
  canAccess(){
    if(!this.isAuthenticated){
      this.router.navigate(['/login'])
    }
  }
  canAuthenticate(){
    if(this.isAuthenticated){
      this.router.navigate(['/dashboard'])
    }
  }
  save(data:any){
    return this.http.post(this.API+"save",data,{responseType:'text'})
     
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
    this.loginuser=null
    this.signinuser=null
    this.isAuthenticated=false
  }

  getAllRoles(){
    return this.http.get(this.API+'getAllRoles')
  }

   roleMatch(allowedRoles:any):boolean {
    let isMatch = false;
    const userRoles: any = this.userAuthService.getRoles();

    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          } else {
            return isMatch;
          }
        }
      }
    }
    return isMatch
  }


}
