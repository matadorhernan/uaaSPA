import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniversityPageRoutingModule } from './university-routing.module';
import { TemplatesModule } from '../../templates/templates.module';

import { UniversityInstitutionComponent } from './university-institution/university-institution.component';
import { UniversityLeadershipComponent } from './university-leadership/university-leadership.component';
import { UniversityAdministrationComponent } from './university-administration/university-administration.component';
import { UniversityCentersComponent } from './university-centers/university-centers.component';
import { UniversityCentersDetailsComponent } from './university-centers/university-centers-details/university-centers-details.component';
import { UniversityDevelopmentComponent } from './university-development/university-development.component';
import { UniversityAcademicModelComponent } from './university-academic-model/university-academic-model.component';

@NgModule({
  declarations: [
    UniversityLeadershipComponent,
    UniversityInstitutionComponent,
    UniversityAdministrationComponent,
    UniversityCentersComponent,
    UniversityCentersDetailsComponent,
    UniversityDevelopmentComponent,
    UniversityAcademicModelComponent,
  ],
  exports: [
    UniversityInstitutionComponent,
    UniversityLeadershipComponent,
    UniversityAdministrationComponent,
    UniversityCentersComponent,
    UniversityDevelopmentComponent,
    UniversityAcademicModelComponent,
    UniversityPageRoutingModule,
  ],
  imports: [CommonModule, TemplatesModule, UniversityPageRoutingModule],
})
export class UniversityPageModule {}
