import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { IPedido } from '../pedido.model';
import { pedidoService } from '../pedido.service';

type NewType = IPedido;

@Component({
  selector: 'app-pedido-acompanhar',
  templateUrl: './pedido-acompanhar.component.html',
  styleUrls: ['./pedido-acompanhar.component.css']
})
export class PedidoAcompanharComponent implements OnInit {

  elemento = document.getElementById('progresso');

  public form!: FormGroup;

  public id?: number

  public pedido!: IPedido

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

}
