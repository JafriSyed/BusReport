import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'busreport-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  destination: any;
  router: any;
  constructor(destination: ActivatedRoute, router: Router) {
    this.destination = destination.snapshot;
    this.router = router;
  }

  ngOnInit(): void {

  }

}
