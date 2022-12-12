import { Data } from "@angular/router"
import { ICliente } from "../cliente/cliente.model"
import { IProduto } from "../produto/produto.model"

export interface IPedido{
    idPedido?: number,
    clienteId?: ICliente,
    produtoId?: IProduto,
    dataPedido?: Date,
    quantidadeProduto?: number,
    valorTotal?: number,
    statusPedido?: string,
}