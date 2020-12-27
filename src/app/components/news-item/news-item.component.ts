import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss'],
})
export class NewsItemComponent implements OnInit {
  @Input('image') image: string;
  @Input('alternativeText') alternativeText: string;
  @Input('title') title: string;
  @Input('text') text: string;

  constructor() {}

  ngOnInit(): void {}
}
