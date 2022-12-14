import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsServicesFormComponent } from './products-services-form.component';

describe('ProductsServicesFormComponent', () => {
  let component: ProductsServicesFormComponent;
  let fixture: ComponentFixture<ProductsServicesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsServicesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsServicesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
