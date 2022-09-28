import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationBasicComponent } from './navigation-basic.component';

describe('NavigationBasicComponent', () => {
  let component: NavigationBasicComponent;
  let fixture: ComponentFixture<NavigationBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
