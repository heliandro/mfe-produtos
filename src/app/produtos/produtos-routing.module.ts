import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosPageComponent } from './produtos-page/produtos-page.component';
import { CommonModule } from '@angular/common';
import { DetalhesProdutoComponent } from './detalhe-produto/detalhes-produto.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'produtos' },
  { path: 'produtos', component: ProdutosPageComponent },
   { path: 'detalhes/:id', component: DetalhesProdutoComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
