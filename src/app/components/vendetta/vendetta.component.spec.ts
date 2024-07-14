import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendettaComponent } from './vendetta.component';

describe('VendettaComponent', () => {
  let component: VendettaComponent;
  let fixture: ComponentFixture<VendettaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VendettaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendettaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
