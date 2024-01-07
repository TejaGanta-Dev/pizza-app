import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPizzasComponent } from './show-pizzas.component';

describe('ShowPizzasComponent', () => {
  let component: ShowPizzasComponent;
  let fixture: ComponentFixture<ShowPizzasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowPizzasComponent]
    });
    fixture = TestBed.createComponent(ShowPizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
