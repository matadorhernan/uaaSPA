import { local_es } from 'src/data/es/local';
import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/services/nav.service';

import * as _ from 'lodash';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public pages = local_es.root.pages;
  public isSideNav: boolean = false;
  private isSideNavEvent: Subscription;
  isNavbarCollapsed = true;

  constructor(private readonly navService: NavService) {
    this.isSideNavEvent = navService.$isSideNav.subscribe((status) => {
      this.isSideNav = status;
    });
  }

  public activateSideNav() {
    this.navService.$isSideNav.next(!this.isSideNav);
  }

  public getChunk(pages: any): any {
    return _.chunk(pages, 7);
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.isSideNavEvent.unsubscribe();
  }
}
7;
