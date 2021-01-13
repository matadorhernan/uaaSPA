import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcessComponent } from './process/process.component';
import { AccreditingComponent } from './accrediting/accrediting.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  {
    path: 'proceso',
    component: ProcessComponent,
  },
  {
    path: 'revalidacion',
    component: AccreditingComponent,
  },
  {
    path: 'resultados',
    component: ResultsComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmisionsPageRoutingModule {}
