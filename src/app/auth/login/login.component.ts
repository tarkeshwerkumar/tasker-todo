import { Component, OnInit, NgZone, OnDestroy } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";
import { Subscription } from 'rxjs';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit, OnDestroy {

  // Subscriptions
  isLoadingSubs: Subscription;

  isLoading:boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    this.isLoadingSubs = this.authService.isLoadingChanged.subscribe(result=>{
      this.isLoading = result;
    });
  }

  login() {
    this.authService.login();
  }

  ngOnDestroy(){
    this.isLoadingSubs.unsubscribe();
  }
}
