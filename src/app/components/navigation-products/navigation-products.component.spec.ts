import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationProductsComponent } from './navigation-products.component';

describe('NavigationMenuComponent', () => {
  let component: NavigationProductsComponent;
  let fixture: ComponentFixture<NavigationProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
