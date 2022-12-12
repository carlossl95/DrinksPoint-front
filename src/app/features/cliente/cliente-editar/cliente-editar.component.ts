import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { __param } from 'tslib';
import { ICliente } from '../cliente.model';
import { clienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-editar',
  templateUrl: './cliente-editar.component.html',
  styleUrls: ['./cliente-editar.component.css']
})
export class ClienteEditarComponent implements OnInit {

  public form!: FormGroup;

  public id?: number;

  public cliente? : ICliente;


  constructor(private _clienteService: clienteService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      nome: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      cpf: new FormControl(null, [Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern("^[0-9]*$")]),
      dataNascimento: new FormControl(null, [Validators.required]),
    })

    this.route.params.subscribe(params => {
      this.id = params['id']
    })

    this.BuscarCliente();
  }

  BuscarCliente() {
    this._clienteService.BuscarCliente(this.id!)
    .pipe(take(1))
        .subscribe((dados: ICliente) => {
          this.cliente = dados;
          this.form.patchValue({
            nome: this.cliente.nome,
            cpf: this.cliente.cpf,
            dataNascimento: formatDate(this.cliente.dataNascimento!, 'yyyy-MM-dd', 'en')
          })
        })
  }

  

  public salvar() {
    if (this.form.valid) {
      const clienteEditado: ICliente = {
        idCliente: this.id,
        nome: this.form.value.nome,
        cpf: this.form.value.cpf,
        dataNascimento: this.form.value.dataNascimento
      }
      this._clienteService.EditaCliente(clienteEditado)
        .pipe(take(1))
        .subscribe(() => {
          alert("Editado com sucesso!")
          window.location.assign('http://localhost:4200/cliente/gerenciar')
        })
    }

  }



}
