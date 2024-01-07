import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackPizzaComponent } from './track-pizza.component';

describe('TrackPizzaComponent', () => {
  let component: TrackPizzaComponent;
  let fixture: ComponentFixture<TrackPizzaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrackPizzaComponent]
    });
    fixture = TestBed.createComponent(TrackPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
