import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TchatComponent } from './tchat.component';

describe('TchatComponent', () => {
  let component: TchatComponent;
  let fixture: ComponentFixture<TchatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TchatComponent]
    });
    fixture = TestBed.createComponent(TchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
