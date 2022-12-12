import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { IPedido } from '../pedido.model';
import { pedidoService } from '../pedido.service';

@Component({
  selector: 'app-pedido-gerenciar',
  templateUrl: './pedido-gerenciar.component.html',
  styleUrls: ['./pedido-gerenciar.component.css']
})
export class PedidoGerenciarComponent implements OnInit {

  public pedido: IPedido[] = []

  constructor(private _pedidoservice: pedidoService, private router: Router) { }

  ngOnInit(): void {
    this._pedidoservice.ListarPedido()
      .pipe(take(1))
      .subscribe((dados: IPedido[]) => {
        this.pedido = dados;
      });
  }

  AlterarStatus(id: number) {
    this.router.navigate(['/pedido/status', id])
  }

  Acompanhar(id: number){
    this.router.navigate(['/pedido/acompanhar', id])
  }

  Deletar(pedido: IPedido) {
    if (confirm(`Excluir Pedido: ${pedido.idPedido}\n Cliente: ${pedido.clienteId?.nome}\n Valor: R$ ${pedido.valorTotal}`)) {
      this._pedidoservice.DeletarPedido(Number(pedido.idPedido))
        .pipe(take(1))
        .subscribe(() => {
          alert("Deletado com sucesso!")
          location.reload()
        })
    }


  }
}
