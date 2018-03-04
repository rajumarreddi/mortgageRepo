import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageeligibilityComponent } from './mortgageeligibility.component';

describe('MortgageeligibilityComponent', () => {
  let component: MortgageeligibilityComponent;
  let fixture: ComponentFixture<MortgageeligibilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MortgageeligibilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageeligibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
