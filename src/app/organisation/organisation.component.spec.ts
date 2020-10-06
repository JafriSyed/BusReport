import { HttpClient, HttpHandler } from '@angular/common/http';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BusReport } from '../models/bus-report';
import { BusReportService } from '../services/bus-report.service';

import { OrganisationComponent } from './organisation.component';


describe('OrganisationComponent', () => {
  let component: OrganisationComponent;
  let fixture: ComponentFixture<OrganisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganisationComponent ],
      providers: [BusReportService, HttpClient, HttpHandler],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set active panel', () => {
    component.setActivePanel(1);
    expect(component.openIndex).toBe(1);
  });

  it('sort should work', inject([BusReportService],
    (apiService: BusReportService) => {
    apiService.getBusInfo().subscribe((data: BusReport) => {
      let sort = new MatSort();
      sort.direction = "asc";
      sort.active = "true";
      component.sortData(sort);
      expect(component.sortedData[0].busId).toEqual("42612");
  });
  }));
});
