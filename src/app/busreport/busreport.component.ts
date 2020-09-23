import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { BusReport } from '../models/bus-report';
import { Organisation } from '../models/organisation';
import { BusReportService } from '../services/bus-report.service';
import { RouteVariantPipe } from '../pipes/route-variant';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'busreport',
  templateUrl: './busreport.component.html',
  styleUrls: ['./busreport.component.scss'],
  encapsulation: ViewEncapsulation.None
})



export class BusReportComponent implements OnInit {
  displayedColumns=['busId','routeVariant','status'];
  public orgs: Organisation[];
  constructor(private busReportService: BusReportService){

  }

  ngOnInit() {
    this.loadBusInfo();
  }

  loadBusInfo():Observable<BusReport>{
    const ob = this.busReportService.getBusInfo();
    ob.subscribe(
      data =>{
        this.orgs = data.data;
        console.log(this.orgs);
      });
      return ob;
  }
}
