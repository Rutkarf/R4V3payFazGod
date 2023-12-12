import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimauxListComponent } from './animaux-list.component';

describe('AnimauxListComponent', () => {
  let component: AnimauxListComponent;
  let fixture: ComponentFixture<AnimauxListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimauxListComponent]
    });
    fixture = TestBed.createComponent(AnimauxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
