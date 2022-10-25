import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaMateriasComponent } from './lista-materias.component';

const routes: Routes = [
  { path: '', component: ListaMateriasComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListarMateriasRoutingModule { }
