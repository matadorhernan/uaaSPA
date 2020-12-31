import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UniversityInstitutionComponent } from './university-institution/university-institution.component';
import { UniversityLeadershipComponent } from './university-leadership/university-leadership.component';
import { UniversityAdministrationComponent } from './university-administration/university-administration.component';
import { UniversityCentersComponent } from './university-centers/university-centers.component';

const routes: Routes = [
  {
    path: 'institucion',
    redirectTo: 'institucion/historia',
  },
  {
    path: 'institucion/:page',
    component: UniversityInstitutionComponent,
  },
  {
    path: 'rectoria',
    component: UniversityLeadershipComponent,
  },
  {
    path: 'direcciones',
    component: UniversityAdministrationComponent,
  },
  {
    path: 'centros',
    component: UniversityCentersComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UniversityPageRoutingModule {}
