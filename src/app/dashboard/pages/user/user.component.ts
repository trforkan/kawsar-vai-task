import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'role', 'last_login', 'status'];

  dataSource = [
    {name: 'Mr X', email: 'xyz@mail.com', role:'Admin', last_login: 'DD/MM/YYYY', status: true},
    {name: 'Mr Y', email: 'pqr@mail.com', role:'Admin', last_login: 'DD/MM/YYYY', status: true},
    {name: 'Mr Z', email: 'ijk@mail.com', role:'User', last_login: 'DD/MM/YYYY', status: false},
  ];

  filteredData : any[] = [];


  searchBy = "Name"

  searchValue = new FormGroup ({
    searchBy: new FormControl(""),
    searchText: new FormControl("")
  })


  selected = "A";

  nameTitles: string[] = [
    "Name",
    "Email",
  ];



  constructor() { }

  ngOnInit(): void {
    this.filteredData=this.dataSource;
  }

  display() {

  }

  searchOnChange() {
    if(this.searchValue.value.searchText==""){
      this.filteredData = this.dataSource;
    }
    else {
      console.log(this.searchValue.value);
      const filterBy =  this.searchValue.value.searchBy?.toLowerCase();
      console.log(filterBy)
      this.filteredData = this.dataSource.filter(value => value.name == this.searchValue.value.searchText);
      if(filterBy=='email'){
        this.filteredData = this.dataSource.filter(value => value.email == this.searchValue.value.searchText);
      }
    }
  }

}
