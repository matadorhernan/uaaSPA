import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LandingComponent } from './pages/landing/landing.component';
import { AboutModule } from './pages/about/about.module';
import { SharedModule } from './shared/shared.module';
import { ComponentsModule } from './components/components.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './templates/header/header.component';
import { SectionComponent } from './templates/section/section.component';
import { CardGridComponent } from './templates/card-grid/card-grid.component';
import { SliderComponent } from './templates/slider/slider.component';
import { EventsComponent } from './templates/events/events.component';
import { SubHeaderComponent } from './templates/sub-header/sub-header.component';
import { QuoteComponent } from './templates/quote/quote.component';
import { SocialComponent } from './templates/social/social.component';
import { ParallaxSectionComponent } from './templates/parallax-section/parallax-section.component';
import { TimelineComponent } from './templates/timeline/timeline.component';
import { ImageQuoteComponent } from './templates/image-quote/image-quote.component';
import { FeaturingJumbotronComponent } from './templates/featuring-jumbotron/featuring-jumbotron.component';
import { ArticleHeaderComponent } from './templates/article-header/article-header.component';
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
    QuoteComponent,
    SocialComponent,
    SubHeaderComponent,
    ParallaxSectionComponent,
    TimelineComponent,
    ImageQuoteComponent,
    FeaturingJumbotronComponent,
    ArticleHeaderComponent,
    ImageBlockComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ComponentsModule,
    AboutModule,
    NgbModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
