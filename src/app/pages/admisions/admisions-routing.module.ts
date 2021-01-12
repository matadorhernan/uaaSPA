import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcessComponent } from './process/process.component';
import { AplicantComponent } from './aplicant/aplicant.component';
import { AccreditingComponent } from './accrediting/accrediting.component';
import { ResultsComponent } from './results/results.component';
import { SchoolarshipsComponent } from './schoolarships/schoolarships.component';

const routes: Routes = [
  {
    path: 'proceso',
    component: ProcessComponent,
  },
  {
    path: 'nuevo',
    component: AplicantComponent,
  },
  {
    path: 'revalidacion',
    component: AccreditingComponent,
  },
  {
    path: 'resultados',
    component: ResultsComponent,
  },
  {
    path: 'becas',
    component: SchoolarshipsComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmisionsPageRoutingModule {}
