import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansSubscriptionsListComponent } from './plans-subscriptions-list.component';

describe('PlansSubscriptionsListComponent', () => {
  let component: PlansSubscriptionsListComponent;
  let fixture: ComponentFixture<PlansSubscriptionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlansSubscriptionsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlansSubscriptionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
