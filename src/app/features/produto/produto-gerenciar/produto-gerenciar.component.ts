import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { IProduto } from '../produto.model';
import { produtoService } from '../produto.service';

@Component({
  selector: 'app-produto-gerenciar',
  templateUrl: './produto-gerenciar.component.html',
  styleUrls: ['./produto-gerenciar.component.css']
})
export class ProdutoGerenciarComponent implements OnInit {

  public listaProduto: IProduto[] = []

  constructor(private _produtosrvice: produtoService, private router: Router) { }

  EditarProduto(id: number) {
    this.router.navigate(['/produto/editar', id])
  }

  AtualizaEstoque(id: number) {
    this.router.navigate(['/produto/estoque', id])
  }

  ngOnInit(): void {
    this._produtosrvice.ListaProduto()
      .pipe(take(1))
      .subscribe((dados: IProduto[]) => {
        this.listaProduto = dados;
      });
  }

  Status(produto: IProduto){
    if (produto.ativo == true) {
      if (confirm(`Desativar: ${produto.descricao}?`)) {
        this._produtosrvice.AtivaDesativa(produto)
        .pipe(take(1))
        .subscribe(() => {
          alert("Produto desativado com sucesso!!!")
          location.reload()
        })
      }
    }
    if (produto.ativo == false) {
      if (confirm(`Ativar: ${produto.descricao}?`)) {
        this._produtosrvice.AtivaDesativa(produto)
        .pipe(take(1))
        .subscribe(() => {
          alert("Produto ativado com sucesso!!!")
          location.reload()
        })
      }
    }    
  }

  Deletar(produto: IProduto) {

    if (confirm(`Excluir o Produto: ${produto.descricao}?`)) {

      this._produtosrvice.DeletarProduto(Number(produto.idProduto))
        .pipe(take(1))
        .subscribe(() => {
          alert("Deletado com sucesso!")
          location.reload()
        })
    }
  }

}
