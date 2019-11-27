import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoboticsComponent } from './components/academics/cci/robotics/robotics.component';


const routes: Routes = [
  {path:'**', redirectTo:'Oferta-Educativa/Licenciaturas/CCI/Robótica'},
  {path:'Oferta-Educativa/Licenciaturas/CCI/Robótica', component:RoboticsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
