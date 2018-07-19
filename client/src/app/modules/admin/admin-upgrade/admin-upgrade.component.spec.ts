import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpgradeComponent } from './admin-upgrade.component';

describe('AdminUpgradeComponent', () => {
  let component: AdminUpgradeComponent;
  let fixture: ComponentFixture<AdminUpgradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUpgradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUpgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
