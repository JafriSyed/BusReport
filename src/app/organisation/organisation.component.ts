import { Component, OnInit, Input } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { BusInfo } from '../models/bus-info';
import { Organisation } from '../models/organisation';

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.css']
})

export class OrganisationComponent implements OnInit {

  @Input() organisation: Organisation;
  sortedData: BusInfo[];
  displayedColumns = ['busId', 'routeVariant', 'status'];
  openIndex : number;
  constructor() {
    if (!this.organisation) {
      this.organisation = new Organisation();
    }
  }

  ngOnInit() {

  }

  setActivePanel(orgDisplayIndex: number): void {
    this.openIndex = orgDisplayIndex;

  }

  saveNotes(): void {
    alert('Following notes have been saved. \n' + this.organisation.notes)
  }

  sortData(sort: Sort) {

    const data = this.organisation.busData.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.organisation.busData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'busId': return compare(a.busId, b.busId, isAsc);
        default: return 0;
      }
    });
  }



}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

