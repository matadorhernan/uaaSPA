import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { BreadcrumbComponent } from './components/shared/breadcrumb/breadcrumb.component';
import { RoboticsComponent } from './components/academics/cci/robotics/robotics.component';
import { RoboticsHeaderComponent } from './components/academics/cci/robotics/robotics-header/robotics-header.component';
import { RoboticsInfoComponent } from './components/academics/cci/robotics/robotics-info/robotics-info.component';
import { RoboticsCardsComponent } from './components/academics/cci/robotics/robotics-cards/robotics-cards.component';
import { RoboticsReadyComponent } from './components/academics/cci/robotics/robotics-ready/robotics-ready.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SidenavModalComponent } from './components/shared/navbar/sidenav-modal/sidenav-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BreadcrumbComponent,
    RoboticsComponent,
    RoboticsHeaderComponent,
    RoboticsInfoComponent,
    RoboticsCardsComponent,
    RoboticsReadyComponent,
    FooterComponent,
    SidenavModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
