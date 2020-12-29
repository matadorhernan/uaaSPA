import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { baseData_es } from 'src/data/es/baseData';

import * as _ from 'lodash';

@Component({
  selector: 'app-university-institution',
  templateUrl: './university-institution.component.html',
  styleUrls: ['./university-institution.component.scss'],
})
export class UniversityInstitutionComponent implements OnInit {
  public localData: any;
  public currentData: any;

  constructor(private readonly activatedRoute: ActivatedRoute) {
    this.localData = _.cloneDeep(baseData_es.root.pages[0].pages[0]);
    activatedRoute.params.subscribe((params) => {
      this.currentData = _.filter(this.localData.pages, (page) => {
        return _.last(page.path.split('/')) == params['page'];
      })[0];
    });
  }

  ngOnInit(): void {}
}
