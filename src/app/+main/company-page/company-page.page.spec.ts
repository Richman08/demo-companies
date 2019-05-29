import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyPagePage } from './company-page.page';

describe('CompanyPagePage', () => {
  let component: CompanyPagePage;
  let fixture: ComponentFixture<CompanyPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
