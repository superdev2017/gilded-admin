export class Transaction {
  static readonly statuses = {
    success: 'SUCCESS',
    fail: 'FAIL'
  };

  ref?: string;
  transaction_id: any;
  invoice_ref: string;
  invoice_number: number;
  invoice_user_id: string;
  fiat_currency: string;
  fiat_amount: number;
  paid_currency: string;
  paid_amount: number;
  paid_time: any;
  exchange_rate: number;
  status: string;
  notes: string;
  created_at: any;
  updated_at: any;

  constructor(data: any) {
    Object.assign(this, data);
  }

  get displayStatusName(): string {
    return Transaction.statuses[this.status];
  }
}
