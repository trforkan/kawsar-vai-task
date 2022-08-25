import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  showFiller = false;
  sidenav=true;

  marginLeft=-180;

  toggleButtons: string[] = [
    "Form",
    "Response",
    "User",
    "Map"
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  routePage(event: string) {
    console.log(event);
    const link = "/dashboard/"+event.toLowerCase();
    console.log(link);
    this.router.navigateByUrl(link);
  }

}
