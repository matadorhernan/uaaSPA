import { Component, OnInit } from '@angular/core';
import { local_es } from 'src/data/es/local';

import * as _ from 'lodash';
@Component({
  selector: 'app-university-leadership',
  templateUrl: './university-leadership.component.html',
  styleUrls: ['./university-leadership.component.scss'],
})
export class UniversityLeadershipComponent implements OnInit {
  public localData: any;

  constructor() {
    this.localData = _.cloneDeep(local_es.root.pages[0].pages[1]);
  }

  ngOnInit(): void {}
}
