import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { jwtDecode, JwtPayload } from 'jwt-decode';



@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  

  constructor(@Inject(PLATFORM_ID) private platformId:object) { }
  roles:any
  jwtToken:any
  userId!:number
  decodedToken:any

  public setRoles(roles: []) {
    if(isPlatformBrowser(this.platformId)){
      localStorage.setItem('roles', JSON.stringify(roles))
    }
     
  }
  public setToken(jwtToken: string) {
    if(isPlatformBrowser(this.platformId)){
      localStorage.setItem('jwtToken', jwtToken)
    } 
  }

  public getRoles() {
    if(isPlatformBrowser(this.platformId)){
      let data:any=localStorage.getItem('roles')
      this.roles=JSON.parse(data)
      return this.roles;
    }
  }

  public getToken() {
    if(isPlatformBrowser(this.platformId)){
      this.jwtToken=localStorage.getItem('jwtToken');
    return this.jwtToken
    }
  }

  public clear() {
    localStorage.clear();
  }

  public isLoggedIn() {
    return this.getRoles() && this.getToken();
  }

  public decodeToken():any{
    if(this.getToken()!=null){
      return jwtDecode<JwtPayload>(this.getToken());
      
    } 
  }
}
