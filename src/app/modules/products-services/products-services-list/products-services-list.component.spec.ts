import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsServicesListComponent } from './products-services-list.component';

describe('ProductsServicesListComponent', () => {
  let component: ProductsServicesListComponent;
  let fixture: ComponentFixture<ProductsServicesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsServicesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsServicesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
