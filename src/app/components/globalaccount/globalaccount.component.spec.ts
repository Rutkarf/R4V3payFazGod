import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalaccountComponent } from './globalaccount.component';

describe('GlobalaccountComponent', () => {
  let component: GlobalaccountComponent;
  let fixture: ComponentFixture<GlobalaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalaccountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
