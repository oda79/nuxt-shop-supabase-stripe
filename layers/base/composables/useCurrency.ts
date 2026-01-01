export const useCurrency = (
  locale: string = 'de-DE',
  currency: string = 'EUR'
) => {
  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    currencyDisplay: 'narrowSymbol'
  })

  return {format: (amount: number) => formatter.format(amount)}
}
