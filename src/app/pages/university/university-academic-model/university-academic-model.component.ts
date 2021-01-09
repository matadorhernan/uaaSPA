import { Component, OnInit } from '@angular/core';
import { local_es } from 'src/data/es/local';

import * as _ from 'lodash';

@Component({
  selector: 'app-university-academic-model',
  templateUrl: './university-academic-model.component.html',
  styleUrls: ['./university-academic-model.component.scss'],
})
export class UniversityAcademicModelComponent implements OnInit {
  public localData: any;

  constructor() {
    this.localData = _.cloneDeep(local_es.root.pages[0].pages[9]);
    console.log(this.localData);
  }

  ngOnInit(): void {}
}
