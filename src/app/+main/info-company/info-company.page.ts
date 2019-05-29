import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ActivatedRoute} from '@angular/router';
import {CompaniesService} from '../../shared/services/companies/companies.service';
import {ICompany} from '../../shared/services/companies/companies';

@Component({
  selector: 'app-info-company',
  templateUrl: './info-company.page.html',
  styleUrls: ['./info-company.page.scss'],
})
export class InfoCompanyPage implements OnInit {

  protected  id: string;
  protected company: ICompany;
  constructor(private activatedRoute: ActivatedRoute, private companyService: CompaniesService) {
    this.id = this.activatedRoute.snapshot.params['id'];
    this._getInfoCompany();
    
  }

  ngOnInit() {
  }


  private _getInfoCompany() {
    this.company = this.companyService.getSomeCompanyInfo(Number(this.id));
    console.log(this.company);
    }
}
 