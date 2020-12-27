import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitleHeadComponent } from './title-head/title-head.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { CalendarItemComponent } from './calendar-item/calendar-item.component';
import { ImageComponent } from './image/image.component';
import { CardComponent } from './card/card.component';
import { TimelineItemComponent } from './timeline-item/timeline-item.component';
import { UserItemComponent } from './user-item/user-item.component';

@NgModule({
  declarations: [
    TitleHeadComponent,
    CardComponent,
    NewsItemComponent,
    CalendarItemComponent,
    ImageComponent,
    TimelineItemComponent,
    UserItemComponent,
  ],
  exports: [
    TitleHeadComponent,
    CardComponent,
    NewsItemComponent,
    CalendarItemComponent,
    ImageComponent,
    TimelineItemComponent,
    UserItemComponent,
  ],
  imports: [CommonModule],
})
export class ComponentsModule {}
