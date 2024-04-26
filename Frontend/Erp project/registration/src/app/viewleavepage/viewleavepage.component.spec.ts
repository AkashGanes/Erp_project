import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewleavepageComponent } from './viewleavepage.component';

describe('ViewleavepageComponent', () => {
  let component: ViewleavepageComponent;
  let fixture: ComponentFixture<ViewleavepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewleavepageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewleavepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
