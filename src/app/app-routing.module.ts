import { AddUserComponent } from './dashboard/pages/add-user/add-user.component';
import { QuesBuilderComponent } from './dashboard/pages/ques-builder/ques-builder.component';
import { FormComponent } from './dashboard/pages/form/form.component';
import { login } from './models/model';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginPortalComponent } from './login-portal/login-portal.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './dashboard/pages/user/user.component';

const routes: Routes = [

  { path: "", component: LoginPortalComponent },
  { path: "login", component: LoginPortalComponent },
  { path: "dashboard", component: DashboardComponent , children: [
    { path: "form" , component: FormComponent },
    { path: "user" , component: UserComponent },
    { path: "createuser" , component: AddUserComponent },
    { path: "create", component: QuesBuilderComponent },
    { path: "" , component: FormComponent },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
