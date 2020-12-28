import { Component, OnInit } from '@angular/core';
import { baseData_es } from 'src/data/es/baseData';
@Component({
  selector: 'app-quick-navbar',
  templateUrl: './quick-navbar.component.html',
  styleUrls: ['./quick-navbar.component.scss'],
})
export class QuickNavbarComponent implements OnInit {
  public quickLinks = baseData_es.root.quickLinks;
  constructor() {}

  ngOnInit(): void {}
}
