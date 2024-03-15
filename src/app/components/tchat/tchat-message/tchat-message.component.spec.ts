import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TchatMessageComponent } from './tchat-message.component';

describe('TchatMessageComponent', () => {
  let component: TchatMessageComponent;
  let fixture: ComponentFixture<TchatMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TchatMessageComponent]
    });
    fixture = TestBed.createComponent(TchatMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
