// 1 - importar o componente numa única linnha (fazer a referência ao componente) e mostrar o caminho para ter acesso ao mesmo
// 2 - Routes - determinar a rota que deve ser seguida nesse componente


import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// local onde se coloca as rotas de cada página do site //
// página inicial - para que sempre apareça a página inicial, colocar um path vazio, redirectTo - sempre fazer referência a uma rota já criada em modo full
// path - nome da rota a ser criada
// component - determinar o componente respectivo a roda denominada no path
const routes: Routes = [
  {path: '', redirectTo: 'entrar', pathMatch: 'full'},

  {path: 'entrar', component: EntrarComponent},
  {path: 'cadastrar', component: CadastrarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
