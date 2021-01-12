import { Component, OnInit } from '@angular/core';
import { local_es } from 'src/data/es/local';

import * as _ from 'lodash';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss'],
})
export class ProcessComponent implements OnInit {
  public localData: any;

  constructor() {
    this.localData = _.cloneDeep(local_es.root.pages[1].pages[0]);
  }
  ngOnInit(): void {}
}
