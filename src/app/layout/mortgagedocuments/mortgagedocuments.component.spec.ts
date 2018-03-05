import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgagedocumentsComponent } from './mortgagedocuments.component';

describe('MortgagedocumentsComponent', () => {
  let component: MortgagedocumentsComponent;
  let fixture: ComponentFixture<MortgagedocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MortgagedocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgagedocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
