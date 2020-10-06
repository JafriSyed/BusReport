import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BusReport } from '../models/bus-report';
import { Organisation } from '../models/organisation';
import { BusReportService } from '../services/bus-report.service';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'busreport',
  templateUrl: './busreport.component.html',
  styleUrls: ['./busreport.component.scss'],
  encapsulation: ViewEncapsulation.None
})



export class BusReportComponent implements OnInit {
  displayedColumns = ['busId', 'routeVariant', 'status'];
  public organisations: Organisation[];

  constructor(private busReportService: BusReportService) {

  }

  ngOnInit() {
    this.loadBusInfo();
  }

  loadBusInfo() {
    this.busReportService.getBusInfo().subscribe(
      data =>{
        this.organisations = data.data;
        console.log(this.organisations);
      });
  }
}
