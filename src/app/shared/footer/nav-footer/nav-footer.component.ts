import { local_es } from 'src/data/es/local';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-nav-footer',
  templateUrl: './nav-footer.component.html',
  styleUrls: ['./nav-footer.component.scss'],
})
export class NavFooterComponent implements OnInit {
  public pages = local_es.root.pages;

  constructor() {}

  public getChunk(pages: any): any {
    return _.chunk(pages, 4);
  }

  ngOnInit(): void {}
}
