import { Component, OnInit } from '@angular/core';
import { information_es } from 'src/data/information';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  public landing = information_es;
  constructor() {}

  ngOnInit(): void {}
}
