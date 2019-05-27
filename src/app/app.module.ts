import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AddCompanyPage } from './+main/add-company/add-company.page';
import { CompanyPagePage } from './+main/company-page/company-page.page';
import { LoginPage } from './login/login.page';
import { MainPagePage } from './+main/main-page/main-page.page';
import { InfoCompanyPage } from './+main/info-company/info-company.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    AddCompanyPage,
    CompanyPagePage,
    InfoCompanyPage,
    MainPagePage,
    LoginPage
  ],
  entryComponents: [
    AppComponent,
    AddCompanyPage,
    CompanyPagePage,
    InfoCompanyPage,
    MainPagePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CookieService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
