import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastTransactionCryptoComponent } from './last-transaction-crypto.component';

describe('LastTransactionCryptoComponent', () => {
  let component: LastTransactionCryptoComponent;
  let fixture: ComponentFixture<LastTransactionCryptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastTransactionCryptoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastTransactionCryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
