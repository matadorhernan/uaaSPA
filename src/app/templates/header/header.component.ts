import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input('label') label: string;
  @Input('title') title: string;
  @Input('image') image: string;

  @ViewChild('header', { static: false }) header?: ElementRef;

  constructor() {}

  ngOnInit(): void {}
  ngAfterViewChecked(): void {
    if (this.image != undefined)
      this.header.nativeElement.style.backgroundImage = `linear-gradient(#005b9434, #005b94e8), url(${this.image})`;
  }
}
