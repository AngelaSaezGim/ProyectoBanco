import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransferenciasRecibidasComponent } from './transferencias-recibidas/transferencias-recibidas.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { NuevaTransferenciaComponent } from './nueva-transferencia/nueva-transferencia.component';
import { TransferenciasEnviadasComponent } from './transferencias-enviadas/transferencias-enviadas.component';

const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
  },
  {
    path:"cuenta" ,
    component: CuentaComponent ,
  },
  {
    path:"nueva-transferencia",
    component:NuevaTransferenciaComponent ,
  },
  {
    path:"transferencias-enviadas",
    component: TransferenciasEnviadasComponent ,
  },
  {
    path:"transferencias-recibidas",
    component: TransferenciasRecibidasComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
