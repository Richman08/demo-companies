import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CompaniesService} from '../../shared/services/companies/companies.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.page.html',
  styleUrls: ['./add-company.page.scss'],
})
export class AddCompanyPage implements OnInit {
  protected addCompanyForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private companyService: CompaniesService, private router: Router) {
    this._buildForm();
  }

  ngOnInit() {
  }
  get f() { return this.addCompanyForm.controls; }

  private addCompany() {
    const {name, city, address} = this.addCompanyForm.value;
    //temprorary solution
    const id = Math.floor(Math.random() * Math.floor(100));
    this.companyService.addCompany({id, name, city, address, latitude: null, longitude: null, img: null});
    //in real situation we will be waiting the response from server and after show some message for example
    this.router.navigate(['main']);
  }

  protected _buildForm() {
    this.addCompanyForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      city: ['', [Validators.required]],
      address: ['', [Validators.required]],
    });
}
}
