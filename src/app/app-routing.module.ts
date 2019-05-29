import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'main-page', pathMatch: 'full' },
  { path: 'main-page', loadChildren: './+main/main-page/main-page.module#MainPagePageModule', canActivate: [AuthGuard] },
  { path: 'add-company', loadChildren: './+main/add-company/add-company.module#AddCompanyPageModule' },
  { path: 'company-page', loadChildren: './+main/company-page/company-page.module#CompanyPagePageModule' },
  { path: 'info-company/:id', loadChildren: './+main/info-company/info-company.module#InfoCompanyPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'header', loadChildren: './shared/header/header.module#HeaderPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 