import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IPedido } from "./pedido.model";

@Injectable()
export class pedidoService{
    
    private api: string = 'http://localhost:5046/api/pedido/'
    
    constructor( private httpClient: HttpClient) {}

    public CriarPedido(novoPedido: IPedido): Observable<boolean>{
        return this.httpClient.post<boolean>(`${this.api}`, novoPedido)
    }

    public ListarPedido(){
        return this.httpClient.get<IPedido[]>(`${this.api}`)
    }

    public BuscarPedido(id : number): Observable<IPedido>{
        return this.httpClient.get<IPedido>(`${this.api}ID/`+id)
    }

    public EditaPedido(produtoEditado: IPedido): Observable<boolean> {
        return this.httpClient.put<boolean>(`${this.api}`, produtoEditado)
    }

    public DeletarPedido(idProduto: number): Observable<boolean> {
        return this.httpClient.delete<boolean>(`${this.api}` + idProduto)
    }
}