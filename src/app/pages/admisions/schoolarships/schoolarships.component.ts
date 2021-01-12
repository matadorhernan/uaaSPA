import { Component, OnInit } from '@angular/core';
import { local_es } from 'src/data/es/local';

import * as _ from 'lodash';

@Component({
  selector: 'app-schoolarships',
  templateUrl: './schoolarships.component.html',
  styleUrls: ['./schoolarships.component.scss'],
})
export class SchoolarshipsComponent implements OnInit {
  public localData: any;

  constructor() {
    this.localData = _.cloneDeep(local_es.root.pages[1].pages[4]);
  }
  ngOnInit(): void {}
}
