import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletecoffeeComponent } from './deletecoffee.component';

describe('DeletecoffeeComponent', () => {
  let component: DeletecoffeeComponent;
  let fixture: ComponentFixture<DeletecoffeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletecoffeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletecoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
