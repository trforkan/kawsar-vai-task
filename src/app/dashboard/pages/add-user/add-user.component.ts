import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  userInfo: FormGroup = new FormGroup({
    nameTitle: new FormControl("",[]),
    firstName: new FormControl("",[]),
    lastName: new FormControl("",[]),
    displayName: new FormControl("",[]),
    gender: new FormControl("",[]),
    dateOfBirth: new FormControl("",[]), 
    nationality: new FormControl("",[]),
    email: new FormControl("",[]),
    role: new FormControl("",[]),
    region: new FormControl("",[]),
    mobile: new FormControl("",[]),
  })

  constructor() { }

  ngOnInit(): void {
  }

  display() {
    // console.log(this.userInfo.value);
    console.log(this.userInfo);
  }

}
