import { Component, OnInit } from '@angular/core';
import { baseData_es } from 'src/data/es/baseData';

import * as _ from 'lodash';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  public readonly baseInfo = _.cloneDeep(baseData_es);
  constructor() {}
  ngOnInit(): void {}
}
