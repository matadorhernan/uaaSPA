import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UniversityInstitutionComponent } from './university-institution/university-institution.component';

import { UniversityLeadershipComponent } from './university-leadership/university-leadership.component';

const routes: Routes = [
  {
    path: 'institucion/:page',
    component: UniversityInstitutionComponent,
  },
  {
    path: 'rectoria',
    component: UniversityLeadershipComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UniversityPageRoutingModule {}
