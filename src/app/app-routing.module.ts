import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'universidad',
    loadChildren: () =>
      import('./pages/university/university.module').then(
        (m) => m.UniversityPageModule
      ),
  },
  {
    path: 'admisiones',
    loadChildren: () =>
      import('./pages/admisions/admisions.module').then(
        (m) => m.AdmisionsPageModule
      ),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
