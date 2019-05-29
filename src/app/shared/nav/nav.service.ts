import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {IPage} from './nav.interface';
import {Router} from '@angular/router';
import {NavMathes} from './nav-matches';
import {Utils} from '../Utils';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  public navListener = new BehaviorSubject(null);
  public chagedRoute = new BehaviorSubject(null);

  constructor(private router: Router) {
    this.navListener.subscribe(
      (data: IPage) => {
        if (!Utils.isMissing(data) && (NavMathes[data.name] || data.name === 'main')) {
         this.chagedRoute.next(data);
        } else {this.chagedRoute.next(null)};

      }
    );
  }
  public pushNavigation (page: IPage) {
    this.navListener.next(page);
  }
  public getBackLocation() {
    const currentLocation: IPage = this.navListener.value;
    if (currentLocation) {
      return NavMathes[currentLocation.name];
    }
      return null;
  }
}
