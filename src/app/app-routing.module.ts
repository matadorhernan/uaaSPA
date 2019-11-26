import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoboticsComponent } from './components/academics/cci/robotics/robotics.component';


const routes: Routes = [
  {path:'', component:RoboticsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
