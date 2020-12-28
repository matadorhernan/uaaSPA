import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-quote',
  templateUrl: './image-quote.component.html',
  styleUrls: ['./image-quote.component.scss'],
})
export class ImageQuoteComponent implements OnInit {
  @Input('data') data: any;

  constructor() {}

  ngOnInit(): void {}
}
