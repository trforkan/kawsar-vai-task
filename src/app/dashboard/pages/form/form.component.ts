import { DataSource } from '@angular/cdk/collections';
import { FormControl, FormGroup } from '@angular/forms';
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

  filteredData: any[] = [];

  searchText= new FormGroup({
    text: new FormControl("")
  })

  constructor() { }

  ngOnInit(): void {
    this.filteredData = this.dataSources;
  }

  filterSearch() {
    console.log(this.searchText.value);
    if(this.searchText.value.text==""){
      this.filteredData=this.dataSources;
    }
    else {
      this.filteredData = this.dataSources.filter(data => data.name == this.searchText.value.text);
    }
  }

}
