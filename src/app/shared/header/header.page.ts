import { NavController, NavParams } from 'ionic-angular';
import {ChangeDetectorRef, Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../services/auth/auth.service';
import {NavService} from '../nav/nav.service';
import {Subscription} from 'rxjs';
import {Utils} from '../Utils';
import {IPage} from '../nav/nav.interface';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
})
export class HeaderPage implements OnInit {

  private positionToolbar: string;
  private prevScroll = window.pageYOffset;
  private backPage: IPage;
  private isBack = false;
  private isMain = false;
  protected  auth;
  protected unSubAuth: Subscription;
  protected unSubNav: Subscription;
  constructor(private authService: AuthService, protected nav: NavService, private cdr: ChangeDetectorRef, private location:Location) {
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
  }
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

}
