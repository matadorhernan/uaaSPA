import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-image-block',
  templateUrl: './image-block.component.html',
  styleUrls: ['./image-block.component.scss'],
})
export class ImageBlockComponent implements AfterViewInit {
  @ViewChild('image', { static: false }) image?: ElementRef;
  @ViewChild('background', { static: false }) background?: ElementRef;
  @Input('data') data: any;

  constructor() {
    setTimeout(() => {}, 1); //Angular's change detection runs after asynchronous operations complete
  }

  ngAfterViewInit() {
    if (this.data.image != undefined) {
      this.image.nativeElement.style.backgroundImage = `url(${this.data.image.path})`;
      this.background.nativeElement.style.backgroundImage = `url(${this.data.image.path})`;
    }
  }
}
