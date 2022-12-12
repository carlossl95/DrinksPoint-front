import { EventEmitter, Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { ICliente } from "./cliente.model";

@Injectable()
export class clienteService {


    private api: string = 'http://localhost:5046/api/cliente/'

    constructor(private httpClient: HttpClient) { }

    public BuscarCliente(id : number): Observable<ICliente>{
        return this.httpClient.get<ICliente>(`${this.api}ID/`+id)
    }

    public cadastrarCliente(novoCliente: ICliente): Observable<boolean> {
        return this.httpClient.post<boolean>(`${this.api}`, novoCliente)
    }

    public ListarCliente() {
        return this.httpClient.get<ICliente[]>(`${this.api}`)
    }

    public EditaCliente(clienteEditado: ICliente): Observable<boolean> {
        return this.httpClient.put<boolean>(`${this.api}`, clienteEditado)
    }

    public DeletarCliente(idCliente: number): Observable<boolean> {
        return this.httpClient.delete<boolean>(`${this.api}` + idCliente)
    }
}