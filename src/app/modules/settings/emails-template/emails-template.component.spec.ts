import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailsTemplateComponent } from './emails-template.component';

describe('EmailsTemplateComponent', () => {
  let component: EmailsTemplateComponent;
  let fixture: ComponentFixture<EmailsTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailsTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
