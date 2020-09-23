import { HttpClient, HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfigService } from '../core/config.service';
import { BusReportService } from '../services/bus-report.service';
import { BusReportComponent } from './busreport.component';



describe('BusReportComponent', () => {
  let component: BusReportComponent;
  let fixture: ComponentFixture<BusReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ BusReportService, ConfigService ],
      imports : [HttpClientModule],
      declarations: [ BusReportComponent ]
    })
    .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
