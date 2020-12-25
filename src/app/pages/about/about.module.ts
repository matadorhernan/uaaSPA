import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanningAboutComponent } from './planning-about/planning-about.component';
import { LeadershipAboutComponent } from './leadership-about/leadership-about.component';
import { InstitutionAboutComponent } from './institution-about/institution-about.component';
import { AdminsitrationAboutComponent } from './adminsitration-about/adminsitration-about.component';
import { BoardAboutComponent } from './board-about/board-about.component';
import { CentersAboutComponent } from './centers-about/centers-about.component';
import { SecretariatAboutComponent } from './secretariat-about/secretariat-about.component';
import { ConsulshipAboutComponent } from './consulship-about/consulship-about.component';
import { PressAboutComponent } from './press-about/press-about.component';
import { LegislationAboutComponent } from './legislation-about/legislation-about.component';
import { EducationalModelAboutComponent } from './educational-model-about/educational-model-about.component';
import { AssosiationsAboutComponent } from './assosiations-about/assosiations-about.component';

@NgModule({
  declarations: [
    PlanningAboutComponent,
    LeadershipAboutComponent,
    InstitutionAboutComponent,
    AdminsitrationAboutComponent,
    BoardAboutComponent,
    CentersAboutComponent,
    SecretariatAboutComponent,
    ConsulshipAboutComponent,
    PressAboutComponent,
    LegislationAboutComponent,
    EducationalModelAboutComponent,
    AssosiationsAboutComponent,
  ],
  exports: [
    PlanningAboutComponent,
    LeadershipAboutComponent,
    InstitutionAboutComponent,
    AdminsitrationAboutComponent,
    BoardAboutComponent,
    CentersAboutComponent,
    SecretariatAboutComponent,
    ConsulshipAboutComponent,
    PressAboutComponent,
    LegislationAboutComponent,
    EducationalModelAboutComponent,
    AssosiationsAboutComponent,
  ],
  imports: [CommonModule],
})
export class AboutModule {}
