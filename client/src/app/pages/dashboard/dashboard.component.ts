import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoinmapService } from 'app/shared/services/coinmap.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  searchValue = '';
  locations: Observable<any>;
  articles = [];
  coords: any;
  currentLocationPlaceholder = 'Search for a place ...';
  searchLocationValue = '';

  constructor(private router: Router, private coinmapService: CoinmapService) {}

  ngOnInit() {
    this._getArticles();

    this.coinmapService.fetchCurrentLocation().then(data => {
      this.currentLocationPlaceholder = data.city + ', ' + data.country;
      this.locations = this._getVenuesList(data);
      this.locations.subscribe();
    });
  }

  goToShop() {
    this.router.navigate(['/shop'], { queryParams: { q: this.searchValue } });
  }

  private _successLocation(data: any) {
    this.coords = data.coords;
    return data;
  }

  private _errorLocation(error: any) {
    return error;
  }

  private _getArticles() {
    this.articles = new Array(6);
  }

  private _getVenuesList(coords: any): Observable<any> {
    return this.coinmapService.fetchVenues(coords).map(data => data.venues);
  }

  searchLocation() {
    if (this.searchLocationValue !== '') {
      this.locations = this.coinmapService.fetchVenuesByQuery(this.searchLocationValue).map(data => data.venues);
    } else {
      this.locations = this.coinmapService.fetchVenues([]).map(data => data.venues);
    }
  }
}
