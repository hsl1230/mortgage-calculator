import { PaymentPlanComponent } from './payment-plan/payment-plan.component';
import { TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CalculationSummaryComponent } from './calculation-summary/calculation-summary.component';
import { MortgageSummaryComponent } from './mortgage-summary/mortgage-summary.component';
import { MockComponent } from 'ng-mocks';
import { CommonModule } from '@angular/common';
import { AppModule } from './app.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        RouterTestingModule,
        CommonModule,
        AppModule
      ],
      declarations: [
        MockComponent(AppComponent),
        MockComponent(PaymentPlanComponent),
        MockComponent(CalculationSummaryComponent),
        MockComponent(MortgageSummaryComponent),
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'mortgage-calculator'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('mortgage-calculator');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.container span')?.textContent).toContain('Mortgage Calculator');
  });
});
