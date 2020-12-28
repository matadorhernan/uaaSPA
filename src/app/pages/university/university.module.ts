import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniversityPageRoutingModule } from './university-routing.module';
import { TemplatesModule } from '../../templates/templates.module';

import { UniversityInstitutionComponent } from './university-institution/university-institution.component';
import { UniversityLeadershipComponent } from './university-leadership/university-leadership.component';

@NgModule({
  declarations: [UniversityLeadershipComponent, UniversityInstitutionComponent],
  exports: [
    UniversityInstitutionComponent,
    UniversityLeadershipComponent,
    UniversityPageRoutingModule,
  ],
  imports: [CommonModule, TemplatesModule, UniversityPageRoutingModule],
})
export class UniversityPageModule {}
