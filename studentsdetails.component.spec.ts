import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsdetailsComponent } from './studentsdetails.component';

describe('StudentsdetailsComponent', () => {
  let component: StudentsdetailsComponent;
  let fixture: ComponentFixture<StudentsdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentsdetailsComponent]
    });
    fixture = TestBed.createComponent(StudentsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
