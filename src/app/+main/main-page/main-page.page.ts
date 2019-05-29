import { Component, OnInit, ViewChild } from '@angular/core';
import {CompaniesService} from '../../shared/services/companies/companies.service';
import {ICompanies, ICompany} from '../../shared/services/companies/companies';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.page.html',
  styleUrls: ['./main-page.page.scss'],
})
export class MainPagePage implements OnInit {
  
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  companies: ICompany[];
  sum = 5;
  constructor(private companiesSevice: CompaniesService) {
    this.companiesSevice.getCompanies().subscribe(
      (data: ICompany[]) => {
        this.companies = data;
        console.log(this.companies)}
    );
  }

  ngOnInit() {
  }

  // Infinite scroll  implemented for testing, in real project it can be a new request(some new page with data)
  onScrollDown (ev) {
    console.log('scrolled down!!', ev);
    // add another 20 items
    for (let i = 0; i < this.sum; i++) {
      let random = Math.random();
      //this.companies.push(random.toString());
    }
  }
  private deleteCompany(id: number){
    const index = this.companies.findIndex((item) => item.id === id);
    this.companies.splice(index, 1);
  }

}
