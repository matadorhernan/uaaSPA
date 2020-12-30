import { Component, OnInit } from '@angular/core';
import { local_es } from 'src/data/es/local';

import * as _ from 'lodash';

@Component({
  selector: 'app-university-administration',
  templateUrl: './university-administration.component.html',
  styleUrls: ['./university-administration.component.scss'],
})
export class UniversityAdministrationComponent implements OnInit {
  public localData: any;

  constructor() {
    this.localData = _.cloneDeep(local_es.root.pages[0].pages[3]);
  }
  ngOnInit(): void {}
}
