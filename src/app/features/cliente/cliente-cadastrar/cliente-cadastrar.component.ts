import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { ICliente } from '../cliente.model';
import { clienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-cadastrar',
  templateUrl: './cliente-cadastrar.component.html',
  styleUrls: ['./cliente-cadastrar.component.css']
})
export class ClienteCadastrarComponent implements OnInit {

  public form!: FormGroup;  

  constructor(private _clienteService: clienteService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      nome: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      cpf: new FormControl(null, [Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern("^[0-9]*$")]),
      dataNascimento: new FormControl(null, [Validators.required]),
    })
  }

  public salvar() {
    if (this.form.valid) {
      const novoCliente: ICliente = {        
        nome: this.form.value.nome,
        cpf: this.form.value.cpf,
        dataNascimento: this.form.value.dataNascimento,       
      }
      this._clienteService.cadastrarCliente(novoCliente)
        .pipe(take(1))
        .subscribe(() => {
          if (confirm("Salvo com sucesso, Deseja adicionar mais Clientes?")) {
            this.form.reset()
          }
          else
          window.location.assign('http://localhost:4200/cliente/gerenciar')
      })

    }
  }

  

}
