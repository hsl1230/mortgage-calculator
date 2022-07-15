import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentPlanComponent } from './payment-plan/payment-plan.component';
import { CalculationSummaryComponent } from './calculation-summary/calculation-summary.component';
import { MortgageSummaryComponent } from './mortgage-summary/mortgage-summary.component';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrencyPipe, CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PaymentPlanComponent,
    CalculationSummaryComponent,
    MortgageSummaryComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgMaterialModule,
  ],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
