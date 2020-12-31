import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/services/nav.service';
import { local_es } from 'src/data/es/local';

import * as _ from 'lodash';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  public navbar = _.cloneDeep(local_es.root);
  public isSideNavActive: boolean = false;

  constructor(private readonly navService: NavService) {
    this.navService.$isSideNav.subscribe((status) => {
      this.isSideNavActive = status;
    });
  }

  public deactivateSideNav(): void {
    let nav = document.getElementById('side-nav-modal');
    nav.classList.remove('activated');
    setTimeout(() => {
      this.navService.$isSideNav.next(!this.isSideNavActive);
    }, 300);
  }

  public openSubMenu(item: any): void {
    let collapsed = item.collapsed;
    this.navbar.quickLinks.collapsed = true;
    for (const page of this.navbar.pages) page.collapsed = true;
    item.collapsed = !collapsed;
  }

  ngOnInit(): void {
    setTimeout(() => {
      let nav = document.getElementById('side-nav-modal');
      nav.classList.add('activated');
    }, 5);
  }
}
