import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteCadastrarComponent } from './features/cliente/cliente-cadastrar/cliente-cadastrar.component';
import { ClienteEditarComponent } from './features/cliente/cliente-editar/cliente-editar.component';
import { ClienteGerenciarComponent } from './features/cliente/cliente-gerenciar/cliente-gerenciar.component';
import { HomeComponent } from './features/inicio/home/home.component';
import { PedidoAcompanharComponent } from './features/pedido/pedido-acompanhar/pedido-acompanhar.component';
import { PedidoCriarComponent } from './features/pedido/pedido-criar/pedido-criar.component';
import { PedidoGerenciarComponent } from './features/pedido/pedido-gerenciar/pedido-gerenciar.component';
import { PedidoStatusComponent } from './features/pedido/pedido-status/pedido-status.component';
import { ProdutoCadastrarComponent } from './features/produto/produto-cadastrar/produto-cadastrar.component';
import { ProdutoEditarComponent } from './features/produto/produto-editar/produto-editar.component';
import { ProdutoEstoqueComponent } from './features/produto/produto-estoque/produto-estoque.component';
import { ProdutoGerenciarComponent } from './features/produto/produto-gerenciar/produto-gerenciar.component';

const routes: Routes = [
  {
    path: 'cliente',
    children: [
      {
        path: 'cadastrar',
        component: ClienteCadastrarComponent,
      },
      {
        path: 'editar/:id',
        component: ClienteEditarComponent,
      },
      {
        path: 'gerenciar',
        component: ClienteGerenciarComponent,
      }
    ],    
  },
  {
    path: '',
    redirectTo: '/inicio/home',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    children: [
      {
        path: 'home',
        component: HomeComponent
      }
    ]
  },
  {
    path: 'pedido',
    children: [
      {
        path: 'acompanhar/:id',
        component: PedidoAcompanharComponent
      },
      {
        path: 'criar',
        component: PedidoCriarComponent
      },
      {
        path: 'gerenciar',
        component: PedidoGerenciarComponent
      },
      {
        path: 'status/:id',
        component: PedidoStatusComponent
      },
    ]
  },
  {
    path: 'produto',
    children: [
      {
        path: 'cadastrar',
        component: ProdutoCadastrarComponent
      },
      {
        path: 'editar/:id',
        component: ProdutoEditarComponent
      },
      {
        path: 'estoque/:id',
        component: ProdutoEstoqueComponent
      },
      {
        path: 'gerenciar',
        component: ProdutoGerenciarComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
