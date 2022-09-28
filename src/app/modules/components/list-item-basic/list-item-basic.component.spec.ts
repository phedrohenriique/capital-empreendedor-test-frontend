import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemBasicComponent } from './list-item-basic.component';

describe('ListItemBasicComponent', () => {
  let component: ListItemBasicComponent;
  let fixture: ComponentFixture<ListItemBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListItemBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListItemBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
