import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-footer-item',
  templateUrl: './nav-footer-item.component.html',
  styleUrls: ['./nav-footer-item.component.scss'],
})
export class NavFooterItemComponent implements OnInit {
  @Input('page') page: any;
  constructor() {}

  ngOnInit(): void {}
}
