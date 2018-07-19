import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentNewComponent } from './payment-new.component';

describe('PaymentNewComponent', () => {
  let component: PaymentNewComponent;
  let fixture: ComponentFixture<PaymentNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentNewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
