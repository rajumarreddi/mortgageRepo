import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgagesuccessComponent } from './mortgagesuccess.component';

describe('MortgagesuccessComponent', () => {
  let component: MortgagesuccessComponent;
  let fixture: ComponentFixture<MortgagesuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MortgagesuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgagesuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
