export class Invoice {
  static readonly statuses = {
    draft: 'DRAFT',
    sent: 'SENT',
    pending: 'PAID - PENDING',
    confirmed: 'PAID - CONFIRMED',
    unpaid: 'UNPAID'
  };

  ref?: string;
  invoice_number: number;
  user_id: string;
  client_id: string; // assigned from firebase
  client: string;
  title: string;
  items: Array<InvoiceItem>;
  terms: string;
  total_amount: number;
  discount: number;
  currency: string;
  fiat_currency: string;
  notes: string;
  status: string;
  // date
  created_at: any;
  updated_at: any;
  date_due: any; // timestamp
  date_send: any; // timestamp
  date_paid: any; // timestamp
  transaction_id?: any;
  invoice_method: string; // address | requestnetwork

  // optional for request network
  requestId?: string;
  creator?: string;
  payer?: string;
  transaction?: string;

  constructor(data: any) {
    Object.assign(this, data);
  }

  get displayStatusName(): string {
    return Invoice.statuses[this.status];
  }
}

export interface IInvoice {
  ref?: string;
  invoice_number: number;
  user_id: string;
  client_id: number; // assigned from firebase
  client: string;
  title: string;
  items: Array<InvoiceItem>;
  terms: string;
  total_amount: number;
  discount: number;
  currency: string;
  fiat_currency: string;
  notes: string;
  status: string;
  // date
  created_at: any;
  updated_at: any;
  date_due: any; // timestamp
  date_send: any; // timestamp
  date_paid: any; // timestamp
  transaction_id?: any;
  invoice_method: string; // address | requestnetwork
}

export class InvoiceItem {
  id?: number;
  description: string;
  quantity: number;
  unit_price: number;
  amount: number;

  constructor(data: any) {
    Object.assign(this, data);
  }
}
