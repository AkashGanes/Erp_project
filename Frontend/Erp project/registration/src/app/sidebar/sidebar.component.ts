import { Component } from '@angular/core';
import { LoginSignupService } from '../service/login-signup.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

activeSection: string = '';

  constructor(private router: Router,public auth:LoginSignupService) {
    // this.router.events.pipe(
    //   filter(event => event instanceof NavigationEnd)
    // ).subscribe((event:any) => {
    //   this.updateActiveSection(event.urlAfterRedirects);
    // });
  }
  ngOnInit(): void {
    this.updateActiveSection(this.router.url);
    // console.log(this.router.url)
  }

  updateActiveSection(url: string): void {
    if (url.includes('/listuser') || url.includes('/adduser')) {
      this.activeSection = 'user-management';
    } else if (url.includes('/viewleavepage') || url.includes('/attendance') || url.includes('/holiday')) {
      this.activeSection = 'leave-management';
    } else if (url.includes('/customers') || url.includes('/suppliers')) {
      this.activeSection = 'invoice';
    } else if (url.includes('/addstaff') || url.includes('/liststaff')|| url.includes('/viewstaff/${id}')) {
      this.activeSection = 'staff-management';
    }else if (url.includes('/dashboard')){
      this.activeSection='dashboard';
    }
     else {
      this.activeSection = '';
    }
  }

  isSectionActive(section: string): boolean {
    return this.activeSection === section;
  }
}
