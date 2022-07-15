import { BiWeeklyMortgageCalculator } from './bi-weekly-mortgage-calculator';
export class AcceleratedBiWeeklyMortgageCalculator extends BiWeeklyMortgageCalculator {
  override get mortgagePayment(): number {
    return this.monthlyPayment / 2;
  }
}
