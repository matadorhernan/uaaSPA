import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bullet-section',
  templateUrl: './bullet-section.component.html',
  styleUrls: ['./bullet-section.component.scss'],
})
export class BulletSectionComponent implements OnInit {
  @Input('data') data: any;
  constructor() {}

  ngOnInit(): void {}
}
