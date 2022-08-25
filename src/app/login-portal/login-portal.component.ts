import { login } from './../models/model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-portal',
  templateUrl: './login-portal.component.html',
  styleUrls: ['./login-portal.component.scss']
})
export class LoginPortalComponent implements OnInit {

  hide = true;

  loginInfo: login | null = null;


  loginInput: FormGroup = new FormGroup({
    email: new FormControl("",[]),
    password: new FormControl("",[])
  });

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  displayData(){
    // console.log(this.loginInput.value);
    this.loginInfo = this.loginInput.value;
    console.log(this.loginInfo);
    this.router.navigateByUrl("/dashboard");


  }

}
