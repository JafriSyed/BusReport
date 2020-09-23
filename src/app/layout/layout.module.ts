import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRouteSnapshot } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    LayoutRoutingModule
  ],
  providers: []
})
export class LayoutModule { }
