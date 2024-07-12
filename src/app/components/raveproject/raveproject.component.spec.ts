import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaveprojectComponent } from './raveproject.component';

describe('RaveprojectComponent', () => {
  let component: RaveprojectComponent;
  let fixture: ComponentFixture<RaveprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaveprojectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaveprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
