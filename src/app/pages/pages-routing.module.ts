import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
  }
  //{
    //path:"cuenta" ,
    //component: ,
  //}
  //{
    //path:"nueva-transferencia",
    //component: ,
  //}
  //{
    //path:"transferencias-enviadas",
    //component: ,
  //}
  //{
    //path:"transferencias-recibidas",
    //component: ,
  //}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
