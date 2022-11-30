import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurrenceListComponent } from './recurrence-list.component';

describe('RecurrenceListComponent', () => {
  let component: RecurrenceListComponent;
  let fixture: ComponentFixture<RecurrenceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecurrenceListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecurrenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
