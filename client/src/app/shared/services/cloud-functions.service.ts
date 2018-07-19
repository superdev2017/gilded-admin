import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'app/../environments/environment';
import { Invoice } from 'app/modules/invoice/models/invoice.model';
import { CurrencyPipe } from '@angular/common';
import { UserService } from 'app/shared/services/user.service';
import { User } from '../models';
import { Subscription } from 'rxjs/Subscription';
import * as moment from 'moment';

@Injectable()
export class CloudFunctionsService {
  user: User;
  email: string;
  invoice: Invoice;
  subscription: Subscription;

  constructor(private http: HttpClient, private _userService: UserService, private currencyPipe: CurrencyPipe) {}

  sendEmail(email: string, invoice: Invoice) {
    this.subscription = this._userService.fetchOne(invoice.user_id).subscribe(user => {
      this.email = email;
      this.invoice = invoice;
      this.user = new User(user);

      // send email
      this._sendEmail();
    });
  }

  private _sendEmail() {
    // @TODO: Remove this when ready to deploy email to production
    // if (environment.production) {
    //   return new Promise((resolve) => {
    //       resolve(false);
    //   });
    // }
    const url = environment.api_url + `/sendEmail`;

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });

    const body = JSON.stringify({
      to: this.email,
      subject: this._subjectTemplate,
      html: this._mailInvoiceTemplate
    });

    // call cloud service
    this.http
      .post(url, body, { headers: httpHeaders })
      .toPromise()
      .then(res => {
        this.subscription.unsubscribe();
      });
  }

  private get _subjectTemplate(): string {
    return `Crypto Invoice from ${this.user.name}`;
  }

  private get _mailInvoiceTemplate() {
    const user = this.user;
    const invoice = this.invoice;
    const appURI = window.location.origin;
    const image = 'https://app.gilded.finance/assets/images/payment-options.png'; // this.user.photo; //<img src="${image}" style="max-width:100px;border-radius:100%;margin:10px;" class="aligncenter">

    const title = 'Gilded';
    const freelancer = user.name;
    const total_amount = this.currencyPipe.transform(invoice.total_amount, invoice.fiat_currency, 'symbol', '1.2');
    const invoice_title = invoice.title;
    const footer_logo = `https://app.gilded.finance/assets/images/logo_black_transparent.png`;
    const invoice_link = `${appURI}/invoices/share/${invoice.ref}`;
    const invoice_number = invoice.invoice_number;
    const send_date = moment(invoice.date_send).format('LL');

    return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
    <head><meta name="viewport" content="width=device-width">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>${title}</title>
    <style type="text/css">
    body {-webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none; width: 100% !important; height: 100%; line-height: 1.6em;}
    body {background-color: #f6f6f6;}@media only screen and (max-width: 640px) { body {padding: 0 !important;} h1 {font-weight: 800 !important; margin: 20px 0 5px !important;} h2 {font-weight: 800 !important; margin: 20px 0 5px !important;} h3 {font-weight: 800 !important; margin: 20px 0 5px !important;} h4 {font-weight: 800 !important; margin: 20px 0 5px !important;} h1 {font-size: 22px !important;} h2 {font-size: 18px !important;} h3 {font-size: 16px !important;} .container {padding: 0 !important; width: 100% !important;} .content {padding: 0 !important;} .content-wrap {padding: 10px !important;} .invoice {width: 100% !important;}}</style></head><body itemscope itemtype="http://schema.org/EmailMessage" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none; width: 100% !important; height: 100%; line-height: 1.6em; background-color: #f6f6f6; margin: 0;" bgcolor="#f6f6f6"><table class="body-wrap" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; background-color: #f6f6f6; margin: 0;" bgcolor="#f6f6f6"><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;" valign="top"></td><td class="container" width="600" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;box-sizing: border-box;font-size: 14px;vertical-align: top;display: block !important;max-width: 600px !important;clear: both !important;margin: 0 auto;padding: 0 !important;width: 100% !important;" valign="top"><div class="content" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; max-width: 600px; display: block; margin: 0 auto; padding: 20px;"><table class="main" width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; border-radius: 3px; background-color: #fff; margin: 0; border: 1px solid #e9e9e9;" bgcolor="#fff"><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="content-wrap aligncenter" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; text-align: center; margin: 0; padding: 20px;" align="center" valign="top"><table width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top"> <img src="${image}" alt="Crypto Payment"> <h1 class="aligncenter" style="font-family: 'Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; box-sizing: border-box; font-size: 32px; color: #000; line-height: 1.2em; font-weight: 500; text-align: center; margin: 30px 0 0;" align="center"></h1></td> </tr> <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"> <td class="content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top"> <h3 class="aligncenter" style="font-family: 'Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; box-sizing: border-box; font-size: 24px; color: #000; line-height: 1.2em; font-weight:300; text-align: center; margin: 30px 0 0;" align="center"> ${freelancer} has sent you an invoice: </h3> </td> </tr> <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"> <td class="content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top"> <b><a href="${invoice_link}">${invoice_title} (#${invoice_number})</a></b> </td> </tr> <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="content-block aligncenter" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; text-align: center; margin: 0; padding: 0 0 20px;" align="center" valign="top"> <table class="invoice" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; text-align: left; width: 80%; margin: 30px auto;"> <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"> <td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0;" valign="top"> Amount: <b>${total_amount}</b> <br style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"> Date: ${send_date}<br style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"> </td></tr> <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"> <td class="content-block alignleft" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; text-align: justify; margin: 0; padding: 10px 0 20px;" align="justify" valign="top"> ${freelancer} would like to be paid in cryptocurrency using Gilded Invoices. If you're new to crypto, don't worry, we'll walk you step by step through the process in 10 minutes or less. Just visit the link below and click Pay With Crypto to learn more.</td> </tr></table></td> </tr> </table></td></tr> <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="content-block aligncenter" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; text-align: center; margin: 0; padding: 0 0 20px;" align="center" valign="top"> <a href="${invoice_link}" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; color: #348eda; text-decoration: underline; margin: 0;"> View and pay invoice </a></td> </tr> </table> </div></td> </tr> </table> <div class="footer" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; clear: both; color: #999; margin: 0; padding: 20px;"> <table width="100%" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"> <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"> <td class="aligncenter content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 12px; vertical-align: top; color: #999; text-align: center; margin: 0; padding: 0 0 20px;" align="center" valign="top"><a href="https://app.gilded.finance"><img style="max-height: 20px;vertical-align: center;max-width: 100%;" src="${footer_logo}" alt="Gilded Logo"></a> <br> Questions? We're happy to help. Reach us at: <a href="mailto:hello@gilded.finance" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 12px; color: #999; text-decoration: underline; margin: 0;">hello@gilded.finance</a> </td> </tr> </table> </div> <td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;" valign="top"></td></body></html>`;
  }
}
