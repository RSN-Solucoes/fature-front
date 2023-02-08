import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankslipFormComponent } from './bankslip-form.component';

describe('BankslipFormComponent', () => {
  let component: BankslipFormComponent;
  let fixture: ComponentFixture<BankslipFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankslipFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankslipFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
