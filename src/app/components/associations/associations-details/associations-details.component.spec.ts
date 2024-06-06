import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationsDetailsComponent } from './associations-details.component';

describe('AssociationsDetailsComponent', () => {
  let component: AssociationsDetailsComponent;
  let fixture: ComponentFixture<AssociationsDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssociationsDetailsComponent]
    });
    fixture = TestBed.createComponent(AssociationsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
