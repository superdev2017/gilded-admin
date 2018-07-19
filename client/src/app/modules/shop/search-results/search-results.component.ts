import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Client } from 'elasticsearch';
import { SearchService } from '../services/search.service';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  @ViewChild(HeaderComponent) header: HeaderComponent;

  private client: Client;

  public queryForm: FormGroup;

  // paging
  public curPosition = 0;
  public curPage = 1;
  public pageSize = 20;
  public totalResults = 0;
  public totalPages = 0;

  public query: string;
  public results = [];

  searchRunning = false;
  searchComplete = false;
  searchError = false;
  showSidebar = false;

  constructor(private formBuilder: FormBuilder, private searchService: SearchService) {}

  ngOnInit() {
    this.connectToElasticSearch();

    this.queryForm = this.formBuilder.group({
      query: ['']
    });

    this.queryForm
      .get('query')
      .valueChanges.debounceTime(250)
      .subscribe(query => {
        this.search(query);
      });

    // init search results
    this.search('shirt');
  }

  private connectToElasticSearch() {
    this.client = new Client({
      host: [
        {
          host: 'c05d473e8db12cf25f28eed9d309bfc9.us-central1.gcp.cloud.es.io',
          protocol: 'https',
          port: '9243',
          auth: 'elastic:4oXiWg97qsAk5IGywxBbsxQL',
          // @TODO: readonly user for elasticsearch
          // auth: 'gilded-search:rfRCtJ+3[6UQ7EYuN>YQ',
          log: 'trace'
        }
      ]
    });
  }

  public search(query: string) {
    this.results = [];
    this.searchRunning = true;

    const newQuery = this.query !== query;
    if (newQuery) {
      this.searchComplete = false;
    }
    this.query = query;

    this.client
      .search({
        q: this.query,
        index: 'old_products_index',
        size: this.pageSize,
        from: this.curPosition

        // @TODO: Implement query filters here
        // see https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/quick-start.html#_more_complex_filtered_query
        // and http://elasticsearch-cheatsheet.jolicode.com/
      })
      .then(
        body => {
          this.searchComplete = true;
          this.searchError = false;

          if (newQuery) {
            this.curPage = 1;
            this.curPosition = 0;
          }

          this.totalResults = body.hits.total;
          this.totalPages = Math.ceil(this.totalResults / this.pageSize);
          this.results = body.hits.hits;
          this.searchRunning = false;

          // @TODO: Populate facets here to display search filters
          // See https://blog.realworldfullstack.io/real-world-app-part-14-faceted-search-with-elasticsearch-and-angular-material-data-table-d90ebaf2ee4b

          // @TODO: Record a Search event in Intercom - only record once every 60 seconds
          // (<any>window).Intercom('trackEvent', 'searched-shop');
        },
        error => {
          this.searchComplete = true;
          this.searchError = true;
          console.trace(error.message);
        }
      );
  }

  toggleSidebar(e: boolean) {
    this.showSidebar = !this.showSidebar;
    this.header.sidebarOpen = this.showSidebar;
  }

  pageChanged(pageNum) {
    this.curPosition = (pageNum - 1) * 20;
    this.curPage = pageNum;
    this.search(this.query);
  }

  showDomain(url: string) {
    const parsed = this.searchService.parseUrl(url);
    if (parsed && parsed.hostname) {
      return parsed.hostname.replace('www.', '');
    }
    return '';
  }

  public trackClick(url) {
    (<any>window).Intercom('trackEvent', 'clicked-shop');
  }
}
