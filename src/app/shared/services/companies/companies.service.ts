import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {Observable, of, throwError} from 'rxjs';
import {ICompanies, ICompany, IShortCompanyDescr} from './companies';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(protected http: HttpClient) { }

  public getCompanies(): Observable<ICompany[]> {
    if (localStorage.getItem('companies')) {
     const companies = JSON.parse(localStorage.getItem('companies'));
     return of(companies);
    } else {
      return this.http.get('assets/companies.json').pipe(
        tap((data: ICompanies) => {
          localStorage.setItem('companies', JSON.stringify(data.companies));
        }),
        map((data: ICompanies) => data.companies),
        catchError(err => throwError(err))
      );
    }
  }
  public  getSomeCompanyInfo(id: number): ICompany {
    const companies = JSON.parse(localStorage.getItem('companies'));
    const findCompany: ICompany =  companies.find((item) => item.id === id);
   return findCompany;
  }
  public addCompany(company: ICompany) {
    const companies: ICompany[] = JSON.parse(localStorage.getItem('companies'));
    companies.push(company);
    localStorage.setItem('companies', JSON.stringify(companies));
  }
} 
