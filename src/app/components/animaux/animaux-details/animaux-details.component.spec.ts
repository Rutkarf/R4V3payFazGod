import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimauxDetailsComponent } from './animaux-details.component';

describe('AnimauxDetailsComponent', () => {
  let component: AnimauxDetailsComponent;
  let fixture: ComponentFixture<AnimauxDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimauxDetailsComponent]
    });
    fixture = TestBed.createComponent(AnimauxDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
