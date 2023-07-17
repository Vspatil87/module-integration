import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FusionPieChartComponent } from './fusion-pie-chart.component';

describe('FusionPieChartComponent', () => {
  let component: FusionPieChartComponent;
  let fixture: ComponentFixture<FusionPieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FusionPieChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FusionPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
