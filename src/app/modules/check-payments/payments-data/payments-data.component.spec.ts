import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsDataComponent } from './payments-data.component';

describe('PaymentsDataComponent', () => {
  let component: PaymentsDataComponent;
  let fixture: ComponentFixture<PaymentsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentsDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
