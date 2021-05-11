import { UpdateComponent } from './components/pedidos/update/update.component';
import { ListComponent } from './components/pedidos/list/list.component';
import { CreateComponent } from './components/pedidos/create/create.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : '',
    component : ListComponent

  },
  {
    path : 'novoPedido',
    component : CreateComponent

  },
  {
    path: 'edit',
    component : UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
