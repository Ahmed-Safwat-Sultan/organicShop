import { UserService } from './../user.service';
import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, map, switchMap } from 'rxjs';
import * as firebase from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private authService: AuthService, private userService: UserService) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Observable<boolean> {

    return this.authService.user$
      .pipe(
        switchMap(user => {
          return this.userService.get(user).valueChanges();

        })).pipe(
          map(appUser => {
            console.log(appUser);
            if(appUser){
              return appUser.isAdmin;
            }
            else{
              return false;
            }
            
          }));
    
  }
}
