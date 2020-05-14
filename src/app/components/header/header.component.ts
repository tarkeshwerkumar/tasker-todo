import { Component, OnInit, Input, ViewEncapsulation, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class HeaderComponent implements OnInit, OnDestroy {

  //Subscriptions
  loggedInSubs: Subscription;

  @Input() sidenav:any;

  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.loggedInSubs = this.authService.authChanged.subscribe(result =>{
      this.isLoggedIn = result;
    });
  }

  ngOnDestroy(){
    this.loggedInSubs.unsubscribe();
  }

  logout(){
    this.authService.logout();
  }

  showAccount(){
    console.log(this.authService.getUser());
  }

}
