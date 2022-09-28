import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastFailureComponent } from './toast-failure.component';

describe('ToastFailureComponent', () => {
  let component: ToastFailureComponent;
  let fixture: ComponentFixture<ToastFailureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToastFailureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToastFailureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
