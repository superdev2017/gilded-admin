import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceShareComponent } from './invoice-share.component';

describe('InvoiceShareComponent', () => {
  let component: InvoiceShareComponent;
  let fixture: ComponentFixture<InvoiceShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InvoiceShareComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
