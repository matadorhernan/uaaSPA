import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-item',
  templateUrl: './calendar-item.component.html',
  styleUrls: ['./calendar-item.component.scss'],
})
export class CalendarItemComponent implements OnInit {
  @Input('month') month: string;
  @Input('day') day: string;
  @Input('text') text: string;

  constructor() {}

  ngOnInit(): void {}
}
