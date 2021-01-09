import {
  Component,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  @Input('data') data: any;
  @ViewChildren('background') background?: QueryList<ElementRef>;

  constructor() {
    setTimeout(() => {}, 1);
  }

  ngOnInit(): void {}
  ngAfterViewInit() {
    if (this.data.list != undefined) {
      for (const [index, data] of this.data.list.entries()) {
        this.background.toArray()[
          index
        ].nativeElement.style.backgroundImage = `linear-gradient(#005b9434, #005b94e8), url(${data.path})`;
      }
    }
  }
}
