import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pedido } from './pedidos.model';
import { EMPTY,Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  baseUrl = "http://localhost:9090/pedido"

  constructor(private http: HttpClient,
              private router: Router,
              private snackbar : MatSnackBar) { }

  showMessage(msg: string, duration:number): void {
        this.snackbar.open(msg, 'X', {
            duration: duration,
            horizontalPosition: "right",
            verticalPosition: "top",
            panelClass : "snackBar"
        })
  }

  create(pedido : Pedido): void{
    this.http.post<Pedido>(this.baseUrl, pedido).subscribe(() => {
      
    })
  }

  read(): Observable<Pedido[]>{
    return this.http.get<Pedido[]>(this.baseUrl).pipe();
  }

  readById(id: number): Observable<Pedido>{
    const url = `${this.baseUrl}/${id}`;
    console.log(url)
    return this.http.get<Pedido>(this.baseUrl).pipe(
    );
  }

  finalizaPedido(pedido: Pedido): Observable<Pedido> {
    const url = `${this.baseUrl}/finaliza/${pedido.id}`;
    return this.http.put<Pedido>(url, pedido).pipe(
      
    );
  }

}