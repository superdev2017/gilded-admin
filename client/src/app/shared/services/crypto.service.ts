import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import * as walletAddressValidator from 'wallet-address-validator';

const ENDPOINT_CRYPTO_URL = 'https://min-api.cryptocompare.com/data/';
/**
 * Please read api documentation for other
 * methods implementation
 * https://www.cryptocompare.com/api
 */

@Injectable()
export class CryptoService {
  currencies = 'USD,EUR,GPB,CAD,AUD,BTC,BCH,ETH,LTC,XRB';

  constructor(private http: HttpClient) {}

  get currenciesToCompare() {
    return this.currencies;
  }

  fetchCryptoValues(currencyToCompare: string): Observable<any> {
    const httpParams = {
      fsym: currencyToCompare,
      tsyms: this.currenciesToCompare
    };

    return this.http.get(`${ENDPOINT_CRYPTO_URL}price`, { params: httpParams });
  }

  /**
   * @param string address
   * @param string currency  options |  'USD,EUR,GPB,CAD,AUD,BTC,BCH,ETH,LTC,XRB'
   */
  validateCryptoWalletAddress(address: string, currency: string): boolean {
    let walletAddressIsValid = true;

    if (currency !== 'XRB') {
      walletAddressIsValid = walletAddressValidator.validate(address, currency);
    }

    return walletAddressIsValid;
  }

  convertCurrency(currency: string, convert: string, amount: number): Observable<any> {
    return this.fetchCryptoValues(currency).map(item => (item[convert] = amount * item[convert]));
  }
}
