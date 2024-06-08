import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListstaffComponent } from './liststaff.component';

describe('ListstaffComponent', () => {
  let component: ListstaffComponent;
  let fixture: ComponentFixture<ListstaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListstaffComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListstaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
