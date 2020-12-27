import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-head',
  templateUrl: './title-head.component.html',
  styleUrls: ['./title-head.component.scss'],
})
export class TitleHeadComponent implements OnInit {
  @Input('position') position: string;
  @Input('label') label: string;
  @Input('title') title: string;
  constructor() {}

  ngOnInit(): void {}
}
