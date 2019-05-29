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
import { MainPagePageModule } from './+main/main-page/main-page.module';
import { InfoCompanyPageModule } from './+main/info-company/info-company.module';
import { LoginPageModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    AddCompanyPage,
    CompanyPagePage,
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
    HttpClientModule,
    MainPagePageModule,
    InfoCompanyPageModule,
    LoginPageModule
  ],
  providers: [
    CookieService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
