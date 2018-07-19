import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

const ENDPOINT_API_URL = environment.api_url + `/coinmapAPI`;
const IP_LOCATION = '//ip-api.com/json';

/**
 * Please read api documentation for other
 * methods implementation
 * https://coinmap.org/api
 */

@Injectable()
export class CoinmapService {
  customHeaders: HttpHeaders;

  constructor(private http: HttpClient) {
    this.customHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  fetchCurrentLocation(): Promise<any> {
    return this.http.get(IP_LOCATION).toPromise();
  }

  fetchVenues(coords: any): Observable<any> {
    // uncomment coordinates in live
    const customParams: any = {
      mode: 'full',
      limit: 10,
      lat1: coords.lat,
      lat2: coords.lat + 0.5,
      lon1: coords.lon,
      lon2: coords.lon + 0.5
    };

    const body = JSON.stringify(customParams);

    // call cloud service
    return this.http.post(ENDPOINT_API_URL, body, { headers: this.customHeaders });
  }

  fetchVenuesByQuery(query: string): Observable<any> {
    // to be removed in live
    const body: any = {
      mode: 'full',
      query: query
    };

    // call cloud service
    return this.http.post(ENDPOINT_API_URL, body, { headers: this.customHeaders });
  }
}
