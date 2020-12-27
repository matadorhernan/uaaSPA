import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input('title') title: string;
  @Input('text') text: string;
  @Input('path') path: string;
  @Input('button') button: string;

  constructor() {}

  ngOnInit(): void {}
}
