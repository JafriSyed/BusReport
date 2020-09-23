import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusReportComponent } from './busreport.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: BusReportComponent },
  { path: 'busreport', pathMatch: 'full', component: BusReportComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusReportRoutingModule { }
