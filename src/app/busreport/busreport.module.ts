import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule as AngularCommonModule } from '@angular/common';
import {ColorStatusPipe} from '../pipes/color.status';

import { BusReportComponent } from './busreport.component';
import { BusReportRoutingModule } from './busreport-routing.module';
/* Angular material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from '../angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouteVariantPipe } from '../pipes/route-variant';

import { OrganisationComponent } from '../organisation/organisation.component';

@NgModule({
  declarations: [BusReportComponent, RouteVariantPipe, ColorStatusPipe, OrganisationComponent ],
  imports: [
    BusReportRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    CommonModule
  ],
  providers: []

})
export class BusReportModule { }
