import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {UsuarioLogin} from '../model/UsuarioLogin';
import { Observable } from 'rxjs';
import {Usuario} from '../model/Usuario';
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



}
