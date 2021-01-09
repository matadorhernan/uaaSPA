import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from '../components/components.module';

import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { CardGridComponent } from './card-grid/card-grid.component';
import { SliderComponent } from './slider/slider.component';
import { EventsComponent } from './events/events.component';
import { QuoteComponent } from './quote/quote.component';
import { SocialComponent } from './social/social.component';
import { ParallaxSectionComponent } from './parallax-section/parallax-section.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ImageQuoteComponent } from './image-quote/image-quote.component';
import { FeaturingJumbotronComponent } from './featuring-jumbotron/featuring-jumbotron.component';
import { ArticleHeaderComponent } from './article-header/article-header.component';
import { ImageBlockComponent } from './image-block/image-block.component';
import { SanitizeHtmlPipe } from '../pipes/sanitize-html.pipe';
import { ImageSectionComponent } from './image-section/image-section.component';
import { TemplatesResolverComponent } from './templates-resolver.component';
import { BulletSectionComponent } from './bullet-section/bullet-section.component';
import { CardColumnsComponent } from './card-columns/card-columns.component';
import { TeamGridComponent } from './team-grid/team-grid.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SectionComponent,
    CardGridComponent,
    SliderComponent,
    EventsComponent,
    QuoteComponent,
    SocialComponent,
    ParallaxSectionComponent,
    TimelineComponent,
    ImageQuoteComponent,
    FeaturingJumbotronComponent,
    ArticleHeaderComponent,
    ImageBlockComponent,
    SanitizeHtmlPipe,
    ImageSectionComponent,
    TemplatesResolverComponent,
    BulletSectionComponent,
    CardColumnsComponent,
    TeamGridComponent,
  ],
  exports: [
    HeaderComponent,
    CardGridComponent,
    CardColumnsComponent,
    TemplatesResolverComponent,
  ],
  imports: [CommonModule, ComponentsModule, NgbModule],
})
export class TemplatesModule {}
