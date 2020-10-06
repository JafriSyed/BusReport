import { TestBed, getTestBed, inject, tick, fakeAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BusReportService } from './bus-report.service';

describe('BusReportService', () => {
  let injector: TestBed;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BusReportService],
    });

    injector = getTestBed();
  });

  it('url should be correctly pointing to Json file', inject([HttpTestingController, BusReportService],
    fakeAsync((httpMock: HttpTestingController, apiService: BusReportService) => {
      expect(apiService).toBeTruthy();
      expect(apiService.dataFolderUrl.endsWith('bus-services-data.json')).toBeTrue();
      httpMock.verify();
      tick();
    }
  ))
);


});
