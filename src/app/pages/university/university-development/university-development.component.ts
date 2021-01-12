import { Component, OnInit } from '@angular/core';
import { local_es } from 'src/data/es/local';

import * as _ from 'lodash';

@Component({
  selector: 'app-university-development',
  templateUrl: './university-development.component.html',
  styleUrls: ['./university-development.component.scss'],
})
export class UniversityDevelopmentComponent implements OnInit {
  public localData: any;

  constructor() {
    this.localData = _.cloneDeep(local_es.root.pages[0].pages[5]);
  }
  ngOnInit(): void {}
}
