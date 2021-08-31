// ctrl + . = importa a uma classe
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {UsuarioLogin} from '../model/UsuarioLogin';
import { Observable } from 'rxjs';
import {Usuario} from '../model/Usuario';
import { environment } from 'src/environments/environment.prod';
// para importar uma classe, digitar ctrl + . em cima da classe

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // criar as rotas do back para consumir o front
  // Observable garante que o Endpoint vai receber extamente o objeto do tipo UsuarioLogin
  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin>('https://blogpessoalhenryk.herokuapp.com/usuarios/logar', usuarioLogin)
  }

  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://blogpessoalhenryk.herokuapp.com/usuarios/cadastrar', usuario)
  }
  //confirma se a pessoa logou com o token ou não, sendo positivo, a mesma está conectada
  // se a pessoa tiver um token, a mesma afirmação se torna true
  //se não, a afirmação continua falsa, ou seja, não está logada
  // enviroment - banco de dados temporário, ele que armazena os dados do usuário para que ele permaneça logado na página, torna mais rápido o acesso e acessa esses

  logado(){

    let ok: boolean = false

    if (environment.token !='')
    ok = true

    return ok

  }

 


}
