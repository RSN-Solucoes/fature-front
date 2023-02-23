import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankDataComponent } from './bank-data.component';

describe('BankDataComponent', () => {
  let component: BankDataComponent;
  let fixture: ComponentFixture<BankDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
