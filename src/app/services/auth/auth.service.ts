import { UserService } from './../user.service';
import { AppUser } from './../../models/app-user';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/auth';
import { Observable, switchMap, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _user$: Observable<any>;
  private _isAdmin: boolean = false;
  

  constructor(private afAuth: AngularFireAuth, 
              private route: ActivatedRoute,
              private userService: UserService) {
    this._user$ = afAuth.authState;
    this.checkIfAdmin();
   }

  loginWithGoogle(){
    let returnUrlQueryParam = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrlQueryParam);
    this.afAuth.signInWithRedirect(new firebase.GoogleAuthProvider() );
  }

  logout(){
    this.afAuth.signOut();
  }


  public get user$(): Observable<firebase.User> {
    return this._user$;
  }
  public set user$(value: Observable<any>) {
    this._user$ = value;
  }

  public checkIfAdmin(){
    this.user$.subscribe(user => {
      this.userService.get(user).valueChanges().subscribe(appUser => {
        console.log(appUser);
        if(appUser?.isAdmin === true){
          this.isAdmin = true;
        }
      })
    })
  }



  public get isAdmin(): boolean {
    return this._isAdmin;
  }
  public set isAdmin(value: boolean) {
    this._isAdmin = value;
  }
  
}
