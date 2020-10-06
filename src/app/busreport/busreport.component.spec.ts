import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpTestingController } from '@angular/common/http/testing';
import { async, ComponentFixture, fakeAsync, inject, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { BusReport } from '../models/bus-report';
import { BusReportService } from '../services/bus-report.service';
import { BusReportComponent } from './busreport.component';
import * as Rx from 'rxjs';
import { delay } from "rxjs/operators";
import { By } from '@angular/platform-browser';


describe('BusReportComponent', () => {
  let component: BusReportComponent;
  let fixture: ComponentFixture<BusReportComponent>;


  beforeEach(async(() => {


    TestBed.configureTestingModule({
      imports : [HttpClientModule],
      declarations: [ BusReportComponent ],
      providers : [ BusReportService ]
    })
    .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(BusReportComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit', () => {
    const fixture = TestBed.createComponent(BusReportComponent);
    const component = fixture.debugElement.componentInstance;
    component.ngOnInit();
  });


  it('should call getBusInfo and result count should be greater than zero', inject([BusReportService],
    (apiService: BusReportService) => {
    apiService.getBusInfo().subscribe((data: BusReport) => {
      expect(data.data.length).toBeGreaterThan(0);
  });
  }));
});
