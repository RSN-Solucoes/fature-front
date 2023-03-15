import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckPaymentsComponent } from './check-payments.component';

describe('CheckPaymentsComponent', () => {
  let component: CheckPaymentsComponent;
  let fixture: ComponentFixture<CheckPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckPaymentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
