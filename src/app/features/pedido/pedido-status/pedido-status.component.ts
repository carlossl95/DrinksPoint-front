import { IPedido } from './../pedido.model';
import { pedidoService } from './../pedido.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-pedido-status',
  templateUrl: './pedido-status.component.html',
  styleUrls: ['./pedido-status.component.css']
})
export class PedidoStatusComponent implements OnInit {

  public form!: FormGroup;

  public id?: number

  public pedido?: IPedido
  constructor(private route: ActivatedRoute, private _pedidoService: pedidoService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      quantidade: new FormControl(null, [Validators.required]),
    })

    this.route.params.subscribe(params => {
      this.id = params['id']
    })

    this.BuscarPedido();
  }

  BuscarPedido() {
    this._pedidoService.BuscarPedido(this.id!)
      .pipe(take(1))
      .subscribe((dados: IPedido) => {
        console.log(dados)
        this.pedido = dados
      })
  }

  salvar() {
    if (this.form.valid) {
      const pedidoEditado: IPedido = {
        idPedido: this.id,
        statusPedido: this.form.get('quantidade')?.value
        
      }
      this._pedidoService.EditaPedido(pedidoEditado)
        .pipe(take(1))
        .subscribe(() => {
          alert("Status alterado com sucesso!")
          window.location.assign('http://localhost:4200/pedido/gerenciar')
        })
    }
  }
}
