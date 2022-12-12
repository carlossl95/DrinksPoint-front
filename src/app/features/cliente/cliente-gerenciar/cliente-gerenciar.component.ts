import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { ICliente } from '../cliente.model';
import { clienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-gerenciar',
  templateUrl: './cliente-gerenciar.component.html',
  styleUrls: ['./cliente-gerenciar.component.css']
})
export class ClienteGerenciarComponent implements OnInit {

  public form!: FormGroup;

  public cliente: ICliente[] = []

  constructor(private _clienteservice: clienteService, private router: Router) { }

  ngOnInit(): void {    
    this._clienteservice.ListarCliente()
      .pipe(take(1))
      .subscribe((dados: ICliente[]) => {
        this.cliente = dados;
      });  
      
      const clienteEditado: ICliente = {
        idCliente: this.form.value.id,
        nome: this.form.value.nome,
        cpf: this.form.value.cpf,
        dataNascimento: this.form.value.dataNascimento
      }
  }

  EditarCliente(id: number){
    this.router.navigate(['/cliente/editar', id])
  } 

  public Deletar(cliente: ICliente){

    if (confirm(`Excluir o Cliente: ${cliente.nome}`)) {
      
      this._clienteservice.DeletarCliente(Number(cliente.idCliente))
      .pipe(take(1))
      .subscribe(() => {
        alert("Deletado com sucesso!")
        location.reload()
      })
    }    
  }
}
