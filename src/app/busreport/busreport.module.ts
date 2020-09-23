import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule as AngularCommonModule } from '@angular/common';

import { BusReportComponent } from './busreport.component';
import { BusReportRoutingModule } from './busreport-routing.module';
//import { CommonModule } from '../common/common.module';


@NgModule({
  declarations: [BusReportComponent ],
  imports: [
    BusReportRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: []

})
export class BusReportModule { }
