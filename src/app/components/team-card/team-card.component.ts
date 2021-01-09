import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss'],
})
export class TeamCardComponent implements OnInit {
  @Input('image') image: any;
  @Input('name') name: string;
  @Input('label') label: string;
  @Input('button') button: any;

  constructor() {}

  ngOnInit(): void {}
}
