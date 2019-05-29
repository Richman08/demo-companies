import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCompanyPage } from './info-company.page';

describe('InfoCompanyPage', () => {
  let component: InfoCompanyPage;
  let fixture: ComponentFixture<InfoCompanyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoCompanyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCompanyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
