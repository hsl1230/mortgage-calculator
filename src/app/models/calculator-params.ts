export interface CalculatorParams {
  mortgageAmount: number,
  interestRate: number,
  amortizationPeriodYear: number,
  amortizationPeriodMonth: number,
  paymentFrequency: string,
  term: number,
  prepaymentAmount: number,
  prepaymentFrequency: string,
  paymentToStartWith: number,
}
