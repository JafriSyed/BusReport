import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { BusReport } from '../models/bus-report';
import { ConfigService } from 'src/app/core/config.service';

@Injectable({
  providedIn: 'root'
})
export class BusReportService {

  public dataFolderUrl: string;

  constructor(private httpClient:HttpClient, private configService: ConfigService) {
    this.dataFolderUrl = this.configService.config.dataFolderUrl;
  }

  getBusInfo():Observable<BusReport>{
    let apiUrl:string = '/assets/data/bus-services-data.json';

    const response = this.httpClient.get<BusReport>(apiUrl);

    return response;
  }
}
