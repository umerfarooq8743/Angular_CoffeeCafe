import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcoffeeComponent } from './editcoffee.component';

describe('EditcoffeeComponent', () => {
  let component: EditcoffeeComponent;
  let fixture: ComponentFixture<EditcoffeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcoffeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditcoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
