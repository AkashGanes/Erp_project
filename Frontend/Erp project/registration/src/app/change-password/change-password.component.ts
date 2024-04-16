import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss'
})
export class ChangePasswordComponent implements OnInit{

  constructor(private router:ActivatedRoute){}
  ngOnInit(): void {
   console.log(this.router.snapshot.params['id'])
  }

}
