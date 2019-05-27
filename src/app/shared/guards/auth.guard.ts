import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
  path: ActivatedRouteSnapshot[];    // not sure about this line --- !!!!!!
  route: ActivatedRouteSnapshot;    // not sure about this line --- !!!!!!
  constructor(public router: Router, private cookie: CookieService) {

  }
  canActivate(): boolean {
    console.log(this.cookie.get('auth-tkn'))
    if (this.cookie.get('auth-tkn')) {
      console.log('in',this.cookie.get('auth-tkn'))
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
