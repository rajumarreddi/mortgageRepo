import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgagepreviewComponent } from './mortgagepreview.component';

describe('MortgagepreviewComponent', () => {
  let component: MortgagepreviewComponent;
  let fixture: ComponentFixture<MortgagepreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MortgagepreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgagepreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
