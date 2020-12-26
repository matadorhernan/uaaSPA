import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { AboutModule } from './pages/about/about.module';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './templates/header/header.component';
import { SectionComponent } from './templates/section/section.component';
import { CardGridComponent } from './templates/card-grid/card-grid.component';
import { SliderComponent } from './templates/slider/slider.component';
import { EventsComponent } from './templates/events/events.component';
import { TitleHeadComponent } from './components/title-head/title-head.component';
import { CardComponent } from './components/card/card.component';
import { QuoteComponent } from './templates/quote/quote.component';
import { SocialComponent } from './templates/social/social.component';
import { SubHeaderComponent } from './templates/sub-header/sub-header.component';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { CalendarItemComponent } from './components/calendar-item/calendar-item.component';
import { ParallaxSectionComponent } from './templates/parallax-section/parallax-section.component';
import { TimelineComponent } from './templates/timeline/timeline.component';
import { ImageQuoteComponent } from './templates/image-quote/image-quote.component';
import { FeaturingJumbotronComponent } from './templates/featuring-jumbotron/featuring-jumbotron.component';
import { ImageComponent } from './components/image/image.component';
import { TimelineItemComponent } from './components/timeline-item/timeline-item.component';
import { ArticleHeaderComponent } from './templates/article-header/article-header.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { ImageBlockComponent } from './templates/image-block/image-block.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    SectionComponent,
    CardGridComponent,
    SliderComponent,
    EventsComponent,
    TitleHeadComponent,
    CardComponent,
    QuoteComponent,
    SocialComponent,
    SubHeaderComponent,
    NewsItemComponent,
    CalendarItemComponent,
    ParallaxSectionComponent,
    TimelineComponent,
    ImageQuoteComponent,
    FeaturingJumbotronComponent,
    ImageComponent,
    TimelineItemComponent,
    ArticleHeaderComponent,
    UserItemComponent,
    ImageBlockComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AboutModule,
    NgbModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
