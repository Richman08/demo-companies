import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public authState = new BehaviorSubject(false);

  constructor(private router: Router, private cookie: CookieService) { this.checkedLoggedIn();}

  public logIn(username: string, password: string, ) {
        this.cookie.set('auth-tkn', username);
        this.authState.next(true);
        this.router.navigate(['main']);

  }
  public logOut(){
    this.cookie.delete('auth-tkn');
    localStorage.clear();
    this.authState.next(false);
    this.router.navigate(['login']);
  }
  public deleteCurrentSession() {
    localStorage.clear();
    window.location.reload();
  }
  protected checkedLoggedIn() {
    console.log('ftgdg')
    if (this.cookie.get('auth-tkn')) {this.authState.next(true); }
  }
}
