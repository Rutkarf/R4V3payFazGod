import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueGlobalAccountComponent } from './value-global-account.component';

describe('ValueGlobalAccountComponent', () => {
  let component: ValueGlobalAccountComponent;
  let fixture: ComponentFixture<ValueGlobalAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValueGlobalAccountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValueGlobalAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
