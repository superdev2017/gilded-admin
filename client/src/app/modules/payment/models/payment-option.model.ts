export class PaymentOption {
  ref?: string;
  user_id: string;
  currency: string;
  currency_name: string;
  icon: string;
  public_key: string;
  created_at: any;

  currencyIcon(currency_code = this.currency) {
    let icon: string;

    switch (currency_code) {
      case 'BTC':
        icon = 'btc';
        break;
      case 'BCH':
        icon = 'bch';
        break;
      case 'ETH':
        icon = 'eth';
        break;
      case 'LTC':
        icon = 'ltc';
        break;
      case 'XRB':
      case 'NANO':
        icon = 'xrb';
        break;
    }

    return icon;
  }

  currencyName(currency_code = this.currency) {
    let name: string;

    switch (currency_code) {
      case 'BTC':
        name = 'Bitcoin';
        break;
      case 'BCH':
        name = 'Bitcoin Cash';
        break;
      case 'ETH':
        name = 'Ethereum';
        break;
      case 'LTC':
        name = 'Litecoin';
        break;
      case 'XRB':
      case 'NANO':
        name = 'Nano';
        break;
    }

    return name;
  }

  constructor(data: any) {
    Object.assign(this, data);
  }
}
