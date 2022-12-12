import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { IProduto } from "./produto.model";

@Injectable()
export class produtoService{
    
    
    
    private api: string = 'http://localhost:5046/api/produto/'
    
    constructor( private httpClient: HttpClient) {}

    public cadastrarProduto(novoProduto: IProduto): Observable<boolean>{
        return this.httpClient.post<boolean>(`${this.api}`, novoProduto)
    }

    public ListaProduto(){
        return this.httpClient.get<IProduto[]>(`${this.api}`)
    }

    public ListaProdutoAtivo(){
        return this.httpClient.get<IProduto[]>(`${this.api}ativo`)
    }

    public BuscarProduto(id : number): Observable<IProduto>{
        return this.httpClient.get<IProduto>(`${this.api}ID/`+id)
    }

    public EditaProduto(produto: IProduto): Observable<boolean> {
        return this.httpClient.put<boolean>(`${this.api}`, produto)
    }

    public AtivaDesativa(produto: IProduto): Observable<boolean> {
        return this.httpClient.put<boolean>(`${this.api}status/`, produto)
    }

    public AtualizaEstoque(produto: IProduto): Observable<boolean> {
        return this.httpClient.put<boolean>(`${this.api}estoque/`, produto)
    }

    public DeletarProduto(idProduto: number): Observable<boolean> {
        return this.httpClient.delete<boolean>(`${this.api}` + idProduto)
    }
    
    
}