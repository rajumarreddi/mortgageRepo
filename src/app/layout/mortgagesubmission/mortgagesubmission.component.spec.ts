import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgagesubmissionComponent } from './mortgagesubmission.component';

describe('MortgagesubmissionComponent', () => {
  let component: MortgagesubmissionComponent;
  let fixture: ComponentFixture<MortgagesubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MortgagesubmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgagesubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
