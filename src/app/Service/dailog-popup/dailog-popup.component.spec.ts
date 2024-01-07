import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailogPopupComponent } from './dailog-popup.component';

describe('DailogPopupComponent', () => {
  let component: DailogPopupComponent;
  let fixture: ComponentFixture<DailogPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailogPopupComponent]
    });
    fixture = TestBed.createComponent(DailogPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
