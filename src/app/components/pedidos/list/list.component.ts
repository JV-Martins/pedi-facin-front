import { Pedido } from './../pedidos.model';
import { PedidosService } from './../pedidos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  dataSource: Pedido[];
  panelOpenState = false;

  constructor(private pedido: PedidosService) { }

  ngOnInit(): void {
    this.pedido.read().subscribe(pedidos => {
      this.dataSource = pedidos
      console.log(pedidos)
    })
  }

  finalizaPedido(pedido: Pedido) {
    if (pedido.status != 'Finalizado') {
      pedido.status = 'Finalizado'
      this.pedido.finalizaPedido(pedido).subscribe(pedido => {
        this.pedido.showMessage(`Pedido da mesa ${pedido.mesa} está Pronto!`,100000)
      })
    }else{
      this.pedido.showMessage("Pedido já finalizado!",1500)
    }
  }
}
