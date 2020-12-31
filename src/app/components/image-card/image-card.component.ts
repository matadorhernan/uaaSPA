import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss'],
})
export class ImageCardComponent implements OnInit {
  @Input('image') image: any;
  @Input('badges') badges: any;
  @Input('title') title: string;
  @Input('label') label: string;
  @Input('text') text: string;
  @Input('button') button: any;

  constructor() {}

  ngOnInit(): void {}
}
