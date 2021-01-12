import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Input,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { BulletSectionComponent } from './bullet-section/bullet-section.component';
import { CardColumnsComponent } from './card-columns/card-columns.component';
import { CardGridComponent } from './card-grid/card-grid.component';
import { ImageBlockComponent } from './image-block/image-block.component';
import { ImageQuoteComponent } from './image-quote/image-quote.component';

import { ImageSectionComponent } from './image-section/image-section.component';
import { QuoteComponent } from './quote/quote.component';
import { SectionComponent } from './section/section.component';
import { SliderComponent } from './slider/slider.component';
import { SocialComponent } from './social/social.component';
import { TeamGridComponent } from './team-grid/team-grid.component';
import { TimelineComponent } from './timeline/timeline.component';

@Component({
  selector: 'app-templates-resolver',
  templateUrl: './templates-resolver.component.html',
  styleUrls: ['./templates-resolver.component.scss'],
})
export class TemplatesResolverComponent implements AfterViewInit {
  @Input('data') data;
  @ViewChild('container', { read: ViewContainerRef }) container;
  private componentRef: ComponentRef<any>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.createComponent(this.data);
  }

  public createComponent(data: any) {
    if (data && data.sectionType && data.sectionType.length > 0) {
      this.container.clear();
      let factory: ComponentFactory<any>;
      let section: any =
        data.sectionType == 'image-section'
          ? ImageSectionComponent
          : data.sectionType == 'bullet-section'
          ? BulletSectionComponent
          : data.sectionType == 'social-section'
          ? SocialComponent
          : data.sectionType == 'image-block'
          ? ImageBlockComponent
          : data.sectionType == 'quote-section'
          ? QuoteComponent
          : data.sectionType == 'image-quote-section'
          ? ImageQuoteComponent
          : data.sectionType == 'timeline-section'
          ? TimelineComponent
          : data.sectionType == 'slider-section'
          ? SliderComponent
          : data.sectionType == 'card-columns'
          ? CardColumnsComponent
          : data.sectionType == 'card-grid'
          ? CardGridComponent
          : data.sectionType == 'team-grid'
          ? TeamGridComponent
          : SectionComponent;

      factory = this.componentFactoryResolver.resolveComponentFactory(section);
      this.componentRef = this.container.createComponent(factory);
      this.componentRef.instance.data = data;
      this.componentRef.injector.get(ChangeDetectorRef).detectChanges();
    }
  }

  ngOnDestroy(): void {
    this.componentRef.destroy();
  }
}
