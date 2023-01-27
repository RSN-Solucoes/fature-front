import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitFormComponent } from './debit-form.component';

describe('DebitFormComponent', () => {
  let component: DebitFormComponent;
  let fixture: ComponentFixture<DebitFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebitFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
