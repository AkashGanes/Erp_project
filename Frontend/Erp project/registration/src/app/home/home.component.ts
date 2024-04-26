import { Component, OnInit } from '@angular/core';
import { LoginSignupService } from '../service/login-signup.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private auth:LoginSignupService){}
  ngOnInit(): void {
   this.auth.canAuthenticate()
  }

}
