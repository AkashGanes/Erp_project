import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffmanagementlistComponent } from './staffmanagementlist.component';

describe('StaffmanagementlistComponent', () => {
  let component: StaffmanagementlistComponent;
  let fixture: ComponentFixture<StaffmanagementlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StaffmanagementlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StaffmanagementlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
