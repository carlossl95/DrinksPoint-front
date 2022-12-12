import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { IProduto } from '../produto.model';
import { produtoService } from '../produto.service';

@Component({
  selector: 'app-produto-estoque',
  templateUrl: './produto-estoque.component.html',
  styleUrls: ['./produto-estoque.component.css']
})
export class ProdutoEstoqueComponent implements OnInit {

  

  public form!: FormGroup;

  public id?: number;

  public produto? : IProduto;


  constructor(private _produtoService: produtoService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      quantidade: new FormControl(),      
    })

    this.route.params.subscribe(params => {
      this.id = params['id']
    })

    this.BuscarProduto();
  }

  BuscarProduto() {
    this._produtoService.BuscarProduto(this.id!)
    .pipe(take(1))
        .subscribe((dados: IProduto) => {
          console.log(dados)
          this.produto = dados
        })
  }

  salvar(){
    if (this.form.valid) {
      const ProdutoEditado: IProduto = {
        idProduto: this.id,
        quantidade: this.form.value.quantidade
      }
      this._produtoService.AtualizaEstoque(ProdutoEditado)
        .pipe(take(1))
        .subscribe(() => {
          alert("Estoque atualizado com sucesso!!!")
          window.location.assign('http://localhost:4200/produto/gerenciar')
        })
    }

  }
}
