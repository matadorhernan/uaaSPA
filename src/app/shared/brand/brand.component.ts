import { Component, OnInit } from '@angular/core';
import { baseData_es } from 'src/data/es/baseData';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss'],
})
export class BrandComponent implements OnInit {
  public university = baseData_es.university;
  constructor() {}

  ngOnInit(): void {}
}
