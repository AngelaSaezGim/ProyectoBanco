import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { TransferenciasRecibidasComponent } from './transferencias-recibidas/transferencias-recibidas.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { NuevaTransferenciaComponent } from './nueva-transferencia/nueva-transferencia.component';
import { TransferenciasEnviadasComponent } from './transferencias-enviadas/transferencias-enviadas.component';


@NgModule({
  declarations: [DashboardComponent, TransferenciasRecibidasComponent, CuentaComponent, NuevaTransferenciaComponent, TransferenciasEnviadasComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
  ]
})
export class PagesModule { }
