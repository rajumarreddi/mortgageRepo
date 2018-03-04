import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgagepropertyComponent } from './mortgageproperty.component';

describe('MortgagepropertyComponent', () => {
  let component: MortgagepropertyComponent;
  let fixture: ComponentFixture<MortgagepropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MortgagepropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgagepropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
