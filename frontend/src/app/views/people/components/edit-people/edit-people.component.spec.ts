import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPeopleComponent } from './edit-people.component';

describe('EditPeopleComponent', () => {
  let component: EditPeopleComponent;
  let fixture: ComponentFixture<EditPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditPeopleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
