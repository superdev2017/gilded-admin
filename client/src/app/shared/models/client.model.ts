export class Client {
  ref?: string;
  user_id: string;
  name: string;
  logo: string;
  email: string;
  active: boolean;
  // stores data for ethereum
  eth_address_id: string;
  eth_address_payment: string;

  constructor(data: any) {
    Object.assign(this, data);
  }
}
