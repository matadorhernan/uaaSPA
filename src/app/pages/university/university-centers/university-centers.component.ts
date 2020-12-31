import { Component, OnInit } from '@angular/core';
import { local_es } from 'src/data/es/local';

import * as _ from 'lodash';

@Component({
  selector: 'app-university-centers',
  templateUrl: './university-centers.component.html',
  styleUrls: ['./university-centers.component.scss'],
})
export class UniversityCentersComponent implements OnInit {
  public localData: any;

  constructor() {
    this.localData = _.cloneDeep(local_es.root.pages[0].pages[4]);
  }
  ngOnInit(): void {}
}
