import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarnetFormComponent } from './carnet-form.component';

describe('CarnetFormComponent', () => {
  let component: CarnetFormComponent;
  let fixture: ComponentFixture<CarnetFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarnetFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarnetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
