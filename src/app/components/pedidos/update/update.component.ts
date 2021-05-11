import { Pedido } from './../pedidos.model';
import { Router } from '@angular/router';
import { PedidosService } from './../pedidos.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  mesas: string[] = ['1','2','3','4','5','6'];
  lanches: string[] = ['X-Bacon','X-EGG','X-Tudo','Dog Mal','Dog Bacon','Dog Frango'];
  bebidas: string[] = ['Coca-Cola','Guaraná','Cerveja','Suco de Laranja'];
  acompanhamentos : string[] = ['Batata - Frita','Cebola Frita','Polenta Frita'];

  panelOpenState = false;

  formCreate : FormGroup

  constructor() { }

  ngOnInit(): void {
  }

}
