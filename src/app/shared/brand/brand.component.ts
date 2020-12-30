import { Component, OnInit } from '@angular/core';
import { local_es } from 'src/data/es/local';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss'],
})
export class BrandComponent implements OnInit {
  public university = local_es.university;
  constructor() {}

  ngOnInit(): void {}
}
