import { Component } from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {NavService} from './shared/nav/nav.service';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

// --------------------------------------------------------------------------
import { NavController, NavParams } from 'ionic-angular';
import {ChangeDetectorRef,  HostListener, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from './shared/services/auth/auth.service';
import {Subscription} from 'rxjs';
import {Utils} from './shared/Utils';
import {IPage} from './shared/nav/nav.interface';
import { Location } from '@angular/common';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  private positionToolbar: string;
  private prevScroll = window.pageYOffset;
  private backPage: IPage;
  private isBack = false;
  private isMain = false;
  protected  auth;
  protected unSubAuth: Subscription;
  protected unSubNav: Subscription;


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    router: Router, 
    private nav: NavService,

    private authService: AuthService,  private cdr: ChangeDetectorRef, private location:Location

  ) {
// -------------------------------------------------------------------------------
this.auth = this.authService.authState.value;
this.unSubAuth = this.authService.authState.subscribe(
  value => {this.auth = value;}
  );
  this.unSubNav = this.nav.chagedRoute.subscribe(
    (data: IPage) => {
      console.log(data)
      if (!Utils.isMissing(data)) { this.isMain = data.name === 'main';}
      if (!Utils.isMissing(data) && !this.isMain) {
        this.backPage = this.nav.getBackLocation();
        this.isBack = true;
        this.cdr.detectChanges();
      } else  {
        this.isBack = false;
      }
    }
    );
// -------------------------------------------------------------------------------


this.initializeApp();

    router.events.subscribe(
      event => {

        if (event instanceof NavigationStart) {
         const name = this._trimUrl(event.url)
          this.nav.pushNavigation({ name });
        }
      });
  }
private _trimUrl(url) {
  const urlDelimitators = new RegExp(/[?//,;&:#$+=]/);
  return url.slice(1).split(urlDelimitators)[0];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

// -----------------------------------------------------------
@HostListener('window:scroll', ['$event'])
onWindowScroll($event) {
  const currentScrollPos = window.pageYOffset;
  if (this.prevScroll > currentScrollPos) {
    this.positionToolbar = '0';
  } else {
    this.positionToolbar = '-50px';
    
  }
  this.prevScroll = currentScrollPos;
}
ngOnInit() {
}
public  logOut(){
  this.authService.logOut();
}
public deleteCurrentSession(){
  this.authService.deleteCurrentSession();
}
ngOnDestroy(){
  this.unSubAuth.unsubscribe();
}

// -----------------------------------------------------------




}
 