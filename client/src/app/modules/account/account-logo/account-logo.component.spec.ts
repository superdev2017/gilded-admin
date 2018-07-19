import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountLogoComponent } from './account-logo.component';

describe('AccountLogoComponent', () => {
  let component: AccountLogoComponent;
  let fixture: ComponentFixture<AccountLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccountLogoComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
