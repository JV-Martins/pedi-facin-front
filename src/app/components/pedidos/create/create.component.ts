import { Pedido } from './../pedidos.model';
import { Router } from '@angular/router';
import { PedidosService } from './../pedidos.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  mesas: string[] = ['1','2','3','4','5','6'];
  lanches: string[] = ['X-Bacon','X-EGG','X-Tudo','Dog Mal','Dog Bacon','Dog Frango'];
  bebidas: string[] = ['Coca-Cola','Guaraná','Cerveja','Suco de Laranja'];
  acompanhamentos : string[] = ['Batata - Frita','Cebola Frita','Polenta Frita'];

  panelOpenState = false;

  formCreate : FormGroup

  constructor(private pedido : PedidosService,
              private router : Router) { }

  ngOnInit(): void {
    this.formCreate = new FormGroup({
      mesa: new FormControl(),
      lanche: new FormControl(),
      obs: new FormControl(),
      acompanhamento: new FormControl(),
      bebida: new FormControl()
    })
  }

  onSubmit(){
    const model : Pedido = {
      id : 0, 
      mesa: this.formCreate.get("mesa")?.value,
      lanche: this.formCreate.get("lanche")?.value,
      obs: this.formCreate.get("obs")?.value,
      acompanhamento: this.formCreate.get("acompanhamento")?.value,
      bebida: this.formCreate.get("bebida")?.value,
      status: 'Preparando'
    }

    this.pedido.create(model);
    this.router.navigate(['/']);
    this.pedido.showMessage("Pedido Cadastrado Com sucesso!!",1500)
  }
  
  

}
