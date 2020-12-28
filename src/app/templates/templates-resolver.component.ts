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
import { ImageQuoteComponent } from './image-quote/image-quote.component';

import { ImageSectionComponent } from './image-section/image-section.component';
import { QuoteComponent } from './quote/quote.component';
import { SectionComponent } from './section/section.component';
import { SocialComponent } from './social/social.component';

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
      let section: any;

      if (data.sectionType == 'image-section') section = ImageSectionComponent;
      else if (data.sectionType == 'social-section') section = SocialComponent;
      else if (data.sectionType == 'quote-section') section = QuoteComponent;
      else if (data.sectionType == 'image-quote-section')
        section = ImageQuoteComponent;
      else if (data.sectionType == 'basic-section') section = SectionComponent;

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
