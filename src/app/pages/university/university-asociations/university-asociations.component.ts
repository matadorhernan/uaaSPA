import { Component, OnInit } from '@angular/core';
import { local_es } from 'src/data/es/local';

import * as _ from 'lodash';

@Component({
  selector: 'app-university-asociations',
  templateUrl: './university-asociations.component.html',
  styleUrls: ['./university-asociations.component.scss'],
})
export class UniversityAsociationsComponent implements OnInit {
  public localData: any;

  constructor() {
    this.localData = _.cloneDeep(local_es.root.pages[0].pages[10]);
    console.log(this.localData);
  }
  ngOnInit(): void {}
}
