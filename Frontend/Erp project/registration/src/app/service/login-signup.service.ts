import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from './user-auth.service';
import { Observable } from 'rxjs';


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
  deleteLeave(id:number){
    return this.http.delete(this.API+"deleteLeave/"+id,{responseType:'text'})
  }

  

  saveHoliday(data:any){
    return this.http.post(this.API+"saveDay",data)
   }
   getHoliday(){
   return this.http.get<any>(this.API+"getHoliday")
   }
   deleteHoliday(id:number){
    return this.http.delete(this.API+"deleteHoliday/"+id,{responseType:'text'})
   }
   saveAttendance(data:any,id:any){
    return this.http.post(this.API+"saveAttendance/"+id ,data)
    
  }
  getAllAttendance(){
    return this.http.get<any>(this.API+"getAllAttendance")
  }

  getAttendanceById(id:number){
    return this.http.get(this.API+"getAttendanceById/"+id)
  }
  deleteAttendace(id:number){
    return this.http.delete(this.API+"deleteAttendance/"+id,{responseType:'text'})
  }

  pagination(pageNumber:number){
    return this.http.get(this.API+"pagination?page-number="+pageNumber)
  }


  getImage(id:number): Observable<Blob>{
    return this.http.get(this.API+"getImage/"+id,{responseType:'blob'})
  }
  getFile(id:number): Observable<Blob>{
    return this.http.get(this.API+"getFile/"+id,{responseType:'blob'})
  }

  saveBasicInformationWithFiles(formData:any){
  return this.http.post(this.API+"saveInformation",formData,{headers:this.requestHeader})
  }
<<<<<<< HEAD
  getBasicInformation(id:number){
    return this.http.get(this.API+"getInformation/"+id)
  }
  getAllBasicInformation(){
    return this.http.get(this.API+"getAllBasicInformation")
  }
  paginationOfBasicInformation(pageNumber:number){
    return this.http.get(this.API+"paginationBasicInfo?page-number="+pageNumber)
  }
  savePersonalInformation(data:FormData,id:number){
    return this.http.post(this.API+"savePersonalInformation/"+id,data)
  }
  saveQualification(data:FormData,id:number){

    return this.http.post(this.API+"saveQualification/"+id,data)
  }

  saveExperience(data:FormData,id:number){
    return this.http.post(this.API+"saveExperience/"+id,data)
=======
  saveTermsAndCondtions(data:any){
    return this.http.post(this.API+"saveCondition",data,{headers:this.requestHeader})
  }
  getAllTermsAndConditions(){
    return this.http.get<any>(this.API+"getCondition")
  }
  getByIdTermsAndconditions(){
    return this.http.get(this.API+"getConditionById/"+this.id)
  }
  deleteTermsAndConditions(id: number) {
    return this.http.delete(this.API+"deleteCondition/"+id,{responseType:'text'})
>>>>>>> bbd6a4ad2c134bde309f25877f447a7bd799024f
  }
}
