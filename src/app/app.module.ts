import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteGerenciarComponent } from './features/cliente/cliente-gerenciar/cliente-gerenciar.component';
import { ClienteEditarComponent } from './features/cliente/cliente-editar/cliente-editar.component';
import { ClienteCadastrarComponent } from './features/cliente/cliente-cadastrar/cliente-cadastrar.component';
import { HomeComponent } from './features/inicio/home/home.component';
import { PedidoCriarComponent } from './features/pedido/pedido-criar/pedido-criar.component';
import { PedidoGerenciarComponent } from './features/pedido/pedido-gerenciar/pedido-gerenciar.component';
import { PedidoStatusComponent } from './features/pedido/pedido-status/pedido-status.component';
import { PedidoAcompanharComponent } from './features/pedido/pedido-acompanhar/pedido-acompanhar.component';
import { ProdutoCadastrarComponent } from './features/produto/produto-cadastrar/produto-cadastrar.component';
import { ProdutoEditarComponent } from './features/produto/produto-editar/produto-editar.component';
import { ProdutoGerenciarComponent } from './features/produto/produto-gerenciar/produto-gerenciar.component';
import { ProdutoEstoqueComponent } from './features/produto/produto-estoque/produto-estoque.component';
import { ReactiveFormsModule } from '@angular/forms';
import { clienteService } from './features/cliente/cliente.service';
import { produtoService } from './features/produto/produto.service';
import { HttpClientModule } from '@angular/common/http';
import { pedidoService } from './features/pedido/pedido.service';

@NgModule({
  declarations: [
    AppComponent,
    ClienteGerenciarComponent,
    ClienteEditarComponent,
    ClienteCadastrarComponent,
    HomeComponent,
    PedidoCriarComponent,
    PedidoGerenciarComponent,
    PedidoStatusComponent,
    PedidoAcompanharComponent,
    ProdutoCadastrarComponent,
    ProdutoEditarComponent,
    ProdutoGerenciarComponent,
    ProdutoEstoqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [clienteService, produtoService, pedidoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
