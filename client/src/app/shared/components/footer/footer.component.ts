import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';

declare var moment;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  website: string = environment.website;
  copyright_year: string;

  constructor() {
    this.copyright_year = moment().year();
  }

  ngOnInit() {}
}
