import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesModule } from '../../templates/templates.module';
import { AdmisionsPageRoutingModule } from './admisions-routing.module';

import { ProcessComponent } from './process/process.component';
import { AccreditingComponent } from './accrediting/accrediting.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [ProcessComponent, AccreditingComponent, ResultsComponent],
  exports: [
    ProcessComponent,
    AccreditingComponent,
    ResultsComponent,
    AdmisionsPageRoutingModule,
  ],
  imports: [CommonModule, TemplatesModule, AdmisionsPageRoutingModule],
})
export class AdmisionsPageModule {}
