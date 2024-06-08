import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddconditionsComponent } from './addconditions.component';

describe('AddconditionsComponent', () => {
  let component: AddconditionsComponent;
  let fixture: ComponentFixture<AddconditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddconditionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddconditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
