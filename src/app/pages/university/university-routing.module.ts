import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UniversityInstitutionComponent } from './university-institution/university-institution.component';
import { UniversityLeadershipComponent } from './university-leadership/university-leadership.component';
import { UniversityAdministrationComponent } from './university-administration/university-administration.component';
import { UniversityCentersComponent } from './university-centers/university-centers.component';
import { UniversityCentersDetailsComponent } from './university-centers/university-centers-details/university-centers-details.component';

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
  {
    path: 'centros/agropecuarias',
    redirectTo: 'centros/agropecuarias/presentacion',
  },
  {
    path: 'centros/artes',
    redirectTo: 'centros/artes/presentacion',
  },
  {
    path: 'centros/:page/:details',
    component: UniversityCentersDetailsComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UniversityPageRoutingModule {}
