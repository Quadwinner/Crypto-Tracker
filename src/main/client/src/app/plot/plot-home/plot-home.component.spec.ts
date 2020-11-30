import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotHomeComponent } from './plot-home.component';

describe('PlotHomeComponent', () => {
  let component: PlotHomeComponent;
  let fixture: ComponentFixture<PlotHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlotHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
