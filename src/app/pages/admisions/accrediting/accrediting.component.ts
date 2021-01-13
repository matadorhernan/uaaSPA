import { Component, OnInit } from '@angular/core';
import { local_es } from 'src/data/es/local';

import * as _ from 'lodash';

@Component({
  selector: 'app-accrediting',
  templateUrl: './accrediting.component.html',
  styleUrls: ['./accrediting.component.scss'],
})
export class AccreditingComponent implements OnInit {
  public localData: any;

  constructor() {
    this.localData = _.cloneDeep(local_es.root.pages[1].pages[1]);
  }
  ngOnInit(): void {}
}
