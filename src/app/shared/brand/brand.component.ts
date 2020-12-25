import { Component, OnInit } from '@angular/core';
import { information_es } from 'src/data/information';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss'],
})
export class BrandComponent implements OnInit {
  public university = information_es.university;
  constructor() {}

  ngOnInit(): void {}
}
