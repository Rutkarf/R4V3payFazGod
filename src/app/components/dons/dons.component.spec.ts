import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonsComponent } from './dons.component';

describe('DonsComponent', () => {
  let component: DonsComponent;
  let fixture: ComponentFixture<DonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonsComponent]
    });
    fixture = TestBed.createComponent(DonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
