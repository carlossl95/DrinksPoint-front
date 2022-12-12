import { produtoService } from './../produto.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { ICliente } from '../../cliente/cliente.model';
import { IProduto } from '../produto.model';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-produto-editar',
  templateUrl: './produto-editar.component.html',
  styleUrls: ['./produto-editar.component.css']
})
export class ProdutoEditarComponent implements OnInit {

  public form!: FormGroup;

  public id?: number;

  public produto? : IProduto;


  constructor(private _produtoService: produtoService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      descricao: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      valor: new FormControl(null,  [Validators.required, Validators.min(0.1)]),
      validade: new FormControl(null, [Validators.required]),
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
          this.produto = dados
          this.form.patchValue({
            descricao: this.produto.descricao,
            valor: this.produto.valor,
            validade: formatDate(this.produto.validade!, 'yyyy-MM-dd', 'en')
          })
          
        })
  }


  public salvar() {
    if (this.form.valid) {
      const ProdutoEditado: IProduto = {
        idProduto: this.id,
        descricao: this.form.value.descricao,
        valor: this.form.value.valor,
        validade: this.form.value.validade
      }
      this._produtoService.EditaProduto(ProdutoEditado)
        .pipe(take(1))
        .subscribe(() => {
          alert("Editado com sucesso!")
          window.location.assign('http://localhost:4200/produto/gerenciar')
        })
    }

  }

}
