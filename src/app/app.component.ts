import { Component } from '@angular/core';
import { MortgageResult } from './core/models/mortgage-result';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mortgage-calculator';
  mortgageResult: MortgageResult | undefined;

  calculate(event: MortgageResult) {
    this.mortgageResult = event;
  }
}
