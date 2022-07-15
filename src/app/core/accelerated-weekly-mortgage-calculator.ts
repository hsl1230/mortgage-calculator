import { WeeklyMortgageCalculator } from "./weekly-mortgage-calculator";

export class AcceleratedWeeklyMortgageCalculator extends WeeklyMortgageCalculator {
  override get mortgagePayment(): number {
    return this.monthlyPayment / 4;
  }
}
