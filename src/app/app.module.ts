import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LandingComponent } from './pages/landing/landing.component';
import { SharedModule } from './shared/shared.module';
import { ComponentsModule } from './components/components.module';
import { TemplatesModule } from './templates/templates.module';
import { UniversityPageModule } from './pages/university/university.module';
import { AdmisionsPageModule } from './pages/admisions/admisions.module';

@NgModule({
  declarations: [AppComponent, LandingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ComponentsModule,
    TemplatesModule,
    NgbModule,
    BrowserAnimationsModule,
    UniversityPageModule,
    AdmisionsPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
