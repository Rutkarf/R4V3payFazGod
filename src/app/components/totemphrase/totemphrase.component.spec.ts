import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotemphraseComponent } from './totemphrase.component';

describe('TotemphraseComponent', () => {
  let component: TotemphraseComponent;
  let fixture: ComponentFixture<TotemphraseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotemphraseComponent]
    });
    fixture = TestBed.createComponent(TotemphraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
