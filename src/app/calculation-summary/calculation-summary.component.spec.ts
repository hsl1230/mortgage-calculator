import { CommonModule, CurrencyPipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgMaterialModule } from '../ng-material/ng-material.module';

import { CalculationSummaryComponent } from './calculation-summary.component';

describe('CalculationSummaryComponent', () => {
  let component: CalculationSummaryComponent;
  let fixture: ComponentFixture<CalculationSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculationSummaryComponent],
      imports: [
        BrowserModule,
        ReactiveFormsModule,
        NgMaterialModule,
        CommonModule
      ],
      providers: [CurrencyPipe],

    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculationSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
