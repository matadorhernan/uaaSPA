import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss'],
})
export class TimelineItemComponent implements OnInit {
  @Input('image') image: string;
  @Input('alternativeText') alternativeText: string;
  @Input('caption') caption: string;
  @Input('title') title: string;
  @Input('list') list: any[];
  constructor() {}

  ngOnInit(): void {}
}
