export class CryptoModel {
  name: string;
  shortcode: string;
  value: number;
  icon: string;

  constructor(data: any) {
    Object.assign(this, data);
  }
}
