import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-grid',
  templateUrl: './team-grid.component.html',
  styleUrls: ['./team-grid.component.scss'],
})
export class TeamGridComponent implements OnInit {
  @Input('data') data: any;
  constructor() {}

  ngOnInit(): void {}
}
