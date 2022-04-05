import { UserService } from './shared/services/user.service';
import { AuthService } from './shared/services/auth/auth.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(router: Router,
              authService: AuthService,
              userService: UserService) {

    authService.user$.subscribe(user => {
      if(user){
        console.log('test test')
        userService.save(user);
        let returnUrl = localStorage.getItem('returnUrl');
        if(returnUrl){
          localStorage.removeItem('returnUrl');
          router.navigateByUrl(returnUrl);
        }

        
      }
    })
    
  }

}
