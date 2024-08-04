import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastTransactionCardComponent } from './last-transaction-card.component';

describe('LastTransactionCardComponent', () => {
  let component: LastTransactionCardComponent;
  let fixture: ComponentFixture<LastTransactionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastTransactionCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastTransactionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
