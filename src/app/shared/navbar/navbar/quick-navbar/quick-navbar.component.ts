import { Component, OnInit } from '@angular/core';
import { local_es } from 'src/data/es/local';
@Component({
  selector: 'app-quick-navbar',
  templateUrl: './quick-navbar.component.html',
  styleUrls: ['./quick-navbar.component.scss'],
})
export class QuickNavbarComponent implements OnInit {
  public quickLinks = local_es.root.quickLinks;
  constructor() {}

  ngOnInit(): void {}
}
