import { Component, OnInit } from '@angular/core';
import { local_es } from 'src/data/es/local';

import * as _ from 'lodash';

@Component({
  selector: 'app-aplicant',
  templateUrl: './aplicant.component.html',
  styleUrls: ['./aplicant.component.scss'],
})
export class AplicantComponent implements OnInit {
  public localData: any;

  constructor() {
    this.localData = _.cloneDeep(local_es.root.pages[1].pages[1]);
  }
  ngOnInit(): void {}
}
