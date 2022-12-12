import { produtoService } from './../../produto/produto.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { IPedido } from '../pedido.model';
import { pedidoService } from '../pedido.service';
import { IProduto } from '../../produto/produto.model';

@Component({
  selector: 'app-pedido-criar',
  templateUrl: './pedido-criar.component.html',
  styleUrls: ['./pedido-criar.component.css']
})
export class PedidoCriarComponent implements OnInit {

  public form!: FormGroup;

  listaProduto: IProduto[] = []

  constructor(private _pedidoService: pedidoService, private _produtoService: produtoService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({      
      cpf: new FormControl(null, [Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern("^[0-9]*$")]),
      produto: new FormControl(null, [Validators.required, ]),
      quantidade: new FormControl(null, [Validators.required, Validators.min(1), Validators.pattern("^[0-9]*$")])
    });
    this.BuscarProdutos();
  }

  BuscarProdutos() {
    this._produtoService.ListaProdutoAtivo()
      .pipe(take(1))
      .subscribe((dados: IProduto[]) => {
        this.listaProduto = dados;
      });
  }


  public salvar() {
    if (this.form.valid) {
      const novoPedido : IPedido = {
      clienteId: {        
        cpf: this.form.get("cpf")?.value,
      },
      produtoId: {
        idProduto: this.form.get('produto')?.value
      },
      quantidadeProduto: this.form.get('quantidade')?.value
    }
    this._pedidoService.CriarPedido(novoPedido)
    .pipe(take(1))
    .subscribe(() => {
      alert('Pedido criado com sucesso')
      this.form.reset();
    })
    }
    

    
  }
}


