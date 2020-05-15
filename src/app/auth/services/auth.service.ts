import { Injectable, NgZone } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from "firebase/app";
import { Router } from "@angular/router";
import { Subject, Observable, from } from "rxjs";
import { User } from "src/app/models/User";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone
  ) {}

  // Subs
  authChanged = new Subject<boolean>();
  isLoadingChanged = new Subject<boolean>();

  initAuthListener() {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        this.authChanged.next(true);
      } else {
        localStorage.removeItem("user");
        this.authChanged.next(false);
        this.router.navigate(["/login"]);
      }
    });
  }

  login() {
    this.isLoadingChanged.next(true);
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((res) => {
        setTimeout(() => {
          this.isLoadingChanged.next(false);
          this.ngZone.run(() => {
            this.router.navigate(["/"]);
          });
        }, 2000);
      })
      .catch((error) => {
        console.log("Auth failed !");
        this.isLoadingChanged.next(false);
      });
  }

  isAuthenticated() {
    const token = localStorage.getItem("user");
    if (token) {
      return true;
    }
    return false;
  }

  logout() {
    this.afAuth.auth.signOut();
  }
  getUser(){
    const token = localStorage.getItem('user');
    if(token){
      const usr: any = JSON.parse(token);
      const user: User = {
        uid : usr?.uid,
        email: usr?.email,
        name: usr?.displayName,
        photoURL: usr?.photoURL,
        createdAt: usr?.createdAt,
        lastLoginAt: usr?.lastLoginAt
      };
      return user;
    }
    return null;
  }
}
