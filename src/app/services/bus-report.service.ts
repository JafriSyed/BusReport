import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { BusReport } from '../models/bus-report';

@Injectable({
  providedIn: 'root'
})
export class BusReportService {

  public dataFolderUrl: string;

  constructor(private httpClient: HttpClient) {
    this.dataFolderUrl = "/assets/data/bus-services-data.json";
  }

  getBusInfo():Observable<BusReport> {

    const response = this.httpClient.get<BusReport>(this.dataFolderUrl);

    return response;
  }
}
