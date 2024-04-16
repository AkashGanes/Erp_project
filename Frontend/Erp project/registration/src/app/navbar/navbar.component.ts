import { Component } from '@angular/core';
import { LoginSignupService } from '../service/login-signup.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(public loginSignup:LoginSignupService ){}

  logout(){
    this.loginSignup.logOut()
    alert("You are sucessfully logged out")
    this.loginSignup.canAccess()
  }
}
