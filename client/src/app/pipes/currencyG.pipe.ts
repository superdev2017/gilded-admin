import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

const CRYPTO_CURRENCIES = ['BTC', 'BCH', 'ETH', 'LTC', 'XRB'];

@Pipe({
  name: 'currencyG'
})
export class CurrencyGPipe implements PipeTransform {
  constructor(private currencyPipe: CurrencyPipe) {}

  // tslint:disable-next-line:max-line-length
  transform(
    value: any,
    currencyCode?: string,
    display?: 'code' | 'symbol' | 'symbol-narrow' | boolean,
    digits?: string,
    locale?: string
  ): string | null {
    if (CRYPTO_CURRENCIES.includes(currencyCode)) {
      const valueStr = parseFloat(value).toString().length > 8 ? parseFloat(value).toFixed(8) : parseFloat(value);
      return valueStr + ' ' + currencyCode;
    } else {
      return this.currencyPipe.transform(value, currencyCode, display, digits, locale);
    }
  }
}
