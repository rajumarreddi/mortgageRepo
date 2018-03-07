/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MortgageadjucationComponent } from './mortgageadjucation.component';

describe('MortgageadjucationComponent', () => {
  let component: MortgageadjucationComponent;
  let fixture: ComponentFixture<MortgageadjucationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MortgageadjucationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageadjucationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
