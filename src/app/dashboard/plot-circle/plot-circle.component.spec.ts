import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotCircleComponent } from './plot-circle.component';

describe('PlotCircleComponent', () => {
  let component: PlotCircleComponent;
  let fixture: ComponentFixture<PlotCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
