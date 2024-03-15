import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TchatIconComponent } from './tchat-icon.component';

describe('TchatIconComponent', () => {
  let component: TchatIconComponent;
  let fixture: ComponentFixture<TchatIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TchatIconComponent]
    });
    fixture = TestBed.createComponent(TchatIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
