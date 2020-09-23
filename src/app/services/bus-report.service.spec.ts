import { TestBed, inject } from '@angular/core/testing';
import { BusReportService } from './bus-report.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { Organisation } from '../models/organisation';
import { ConfigService } from '../core/config.service';


describe('BusReportService', () => {

  let service : BusReportService;
  let configService : ConfigService;
  let httpMock : HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BusReportService, ConfigService],
      imports:[HttpClientTestingModule]
    });

    service = TestBed.get(BusReportService);
    httpMock = TestBed.get(HttpTestingController);
    configService = TestBed.get(ConfigService);
  });

 afterEach(() =>{

 });




});

