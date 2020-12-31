import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-columns',
  templateUrl: './card-columns.component.html',
  styleUrls: ['./card-columns.component.scss'],
})
export class CardColumnsComponent implements OnInit {
  @Input('data') data: any;

  constructor() {}

  ngOnInit(): void {}
}
