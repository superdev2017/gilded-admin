import { Injectable } from '@angular/core';
import * as urlParse from 'url-parse';

@Injectable()
export class SearchService {
  constructor() {}

  public parseUrl(url: string): IParsedUrl {
    const baseUrl = {}; // Ensures that the parsing is independent from the current location of the browser.
    const parseQueryString: boolean = true;
    return urlParse(url, baseUrl, parseQueryString);
  }
}

export interface IParsedUrl {
  protocol: string;
  slashes: boolean;
  auth: string;
  username: string;
  password: string;
  host: string;
  hostname: string;
  port: number;
  pathname: string;
  query: {
    [key: string]: string;
  };
  hash: string;
  href: string;
  origin: string;
  set(key: string, value: string): void;
  toString(): string;
}
