import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgagequotationComponent } from './mortgagequotation.component';

describe('MortgagequotationComponent', () => {
  let component: MortgagequotationComponent;
  let fixture: ComponentFixture<MortgagequotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MortgagequotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgagequotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
