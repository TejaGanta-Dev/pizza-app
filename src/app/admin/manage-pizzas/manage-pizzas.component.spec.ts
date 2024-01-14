import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePizzasComponent } from './manage-pizzas.component';

describe('ManagePizzasComponent', () => {
  let component: ManagePizzasComponent;
  let fixture: ComponentFixture<ManagePizzasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagePizzasComponent]
    });
    fixture = TestBed.createComponent(ManagePizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
