import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { IProduto } from '../produto.model';
import { produtoService } from '../produto.service';

@Component({
  selector: 'app-produto-cadastrar',
  templateUrl: './produto-cadastrar.component.html',
  styleUrls: ['./produto-cadastrar.component.css']
})
export class ProdutoCadastrarComponent implements OnInit {

  public form!: FormGroup;

  constructor(private _produtoService: produtoService) { 
    
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      descricao: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      valor: new FormControl(null,  [Validators.required, Validators.min(0.1)]),
      validade: new FormControl(null, [Validators.required]),
    })
  }

  public salvar() {
    if (this.form.valid) {
      const novoProduto: IProduto = {        
        descricao: this.form.value.descricao,
        valor: this.form.value.valor,
        validade: this.form.value.validade,
      }
      this._produtoService.cadastrarProduto(novoProduto)
        .pipe(take(1))
        .subscribe(() => {
          alert("Salvo com sucesso!")
          this.form.reset();
      })
    }
  }

}
