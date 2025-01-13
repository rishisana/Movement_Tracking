import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndAthleteComponent } from './ind-athlete.component';

describe('IndAthleteComponent', () => {
  let component: IndAthleteComponent;
  let fixture: ComponentFixture<IndAthleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndAthleteComponent]
    });
    fixture = TestBed.createComponent(IndAthleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
