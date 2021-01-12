import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesModule } from '../../templates/templates.module';
import { AdmisionsPageRoutingModule } from './admisions-routing.module';

import { ProcessComponent } from './process/process.component';
import { AplicantComponent } from './aplicant/aplicant.component';
import { AccreditingComponent } from './accrediting/accrediting.component';
import { ResultsComponent } from './results/results.component';
import { SchoolarshipsComponent } from './schoolarships/schoolarships.component';

@NgModule({
  declarations: [
    ProcessComponent,
    AplicantComponent,
    AccreditingComponent,
    ResultsComponent,
    SchoolarshipsComponent,
  ],
  exports: [
    ProcessComponent,
    AplicantComponent,
    AccreditingComponent,
    ResultsComponent,
    AdmisionsPageRoutingModule,
  ],
  imports: [CommonModule, TemplatesModule, AdmisionsPageRoutingModule],
})
export class AdmisionsPageModule {}
