import { Injectable, NgZone } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
// import { User, auth } from "firebase";
import * as firebase from 'firebase/app';
import { Router } from "@angular/router";
import { Subject, Observable, from } from "rxjs";
import { User } from 'src/app/models/User';

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

  private user: firebase.User;
  private uiUser: User;

  initAuthListener() {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.user = user;
        const usr: any = user.toJSON();
        this.uiUser = {
          uid: usr?.uid,
          email: usr?.email,
          name: usr?.displayName,
          photoURL: usr?.photoURL
        };

        localStorage.setItem("user", JSON.stringify(user));
        this.authChanged.next(true);
      } else {
        localStorage.removeItem("user");
        this.authChanged.next(false);
        this.router.navigate(['/login']);
      }
    });
  }

  login(){
    this.isLoadingChanged.next(true);
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((res) => {
        setTimeout(()=>{
          this.isLoadingChanged.next(false);
          this.ngZone.run(()=> {this.router.navigate(['/']);});
        }, 2000);
      })
      .catch((error) => {
        console.log("Auth failed !");
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
    return {...this.uiUser};
  }
}
