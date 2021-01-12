import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input('title') title: string;
  @Input('label') label: string;
  @Input('path') path: string;
  @Input('notExternal') notExternal: boolean;

  constructor() {}

  ngOnInit(): void {}
}
