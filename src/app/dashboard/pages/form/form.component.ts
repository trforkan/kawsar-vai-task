import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  dataSources = [
    { name: "SSC" , created_on: "01/01/2022"},
    { name: "HSC" , created_on: "01/01/2022"},
    { name: "PSC" , created_on: "01/01/2022"},
    { name: "MID" , created_on: "01/01/2022"},
    { name: "FINAL" , created_on: "01/01/2022"},
  ];

  displayedColumns = ['name','created_on'];

  constructor() { }

  ngOnInit(): void {
  }

}
