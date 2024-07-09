import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfilComponent } from './editprofil.component';

describe('EditprofilComponent', () => {
  let component: EditProfilComponent;
  let fixture: ComponentFixture<EditProfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditProfilComponent]
    });
    fixture = TestBed.createComponent(EditProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
