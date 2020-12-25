import { information_es } from 'src/data/information';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public pages = information_es.navbar.pages;
  public dropDownOffset: string = '300px';
  public isDropDownActive: boolean = false;
  public isSideNavActive: boolean = false;
  constructor() {}

  public activateSideNav() {}
  public getChunk(pages: any): any {
    return _.chunk(pages, 6);
  }
  ngOnInit(): void {}
}
