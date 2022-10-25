import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarMateriasRoutingModule } from './listar-materias-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [
    InicioComponent,
  ],
  imports: [
    CommonModule,
    ListarMateriasRoutingModule,
    SharedModule,
  ]
})
export class ListarMateriasModule { }
