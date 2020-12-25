import { Component, OnInit } from '@angular/core';
import { information_es } from 'src/data/information';
@Component({
  selector: 'app-quick-navbar',
  templateUrl: './quick-navbar.component.html',
  styleUrls: ['./quick-navbar.component.scss'],
})
export class QuickNavbarComponent implements OnInit {
  public quickLinks = information_es.navbar.quickLinks;
  constructor() {}

  ngOnInit(): void {}
}
