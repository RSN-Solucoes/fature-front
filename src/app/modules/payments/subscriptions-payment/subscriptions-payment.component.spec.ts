import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionsPaymentComponent } from './subscriptions-payment.component';

describe('SubscriptionsPaymentComponent', () => {
  let component: SubscriptionsPaymentComponent;
  let fixture: ComponentFixture<SubscriptionsPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionsPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptionsPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
