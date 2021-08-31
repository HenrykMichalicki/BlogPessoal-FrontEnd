import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin()

  constructor(
    private auth: AuthService,
    private router: Router

  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  entrar(){
    this.auth.entrar(this.usuarioLogin).subscribe((resp: UsuarioLogin)=>{
      this.usuarioLogin = resp

      // enviroment - objetos que ajudam a trabalhar com variáveis globais. deve ser incializado na pasta environment- environment.prod

      environment.token = this.usuarioLogin.token
      environment.id = this.usuarioLogin.id
      environment.nome = this.usuarioLogin.nome
      environment.foto = this.usuarioLogin.foto

      //console.log - valida os dados acessados pelo usuário através do environment

      console.log(environment.token)
      console.log(environment.id)
      console.log(environment.nome)
      console.log(environment.nome)
      console.log(environment.foto)


      this.router.navigate(['/inicio'])

    }, erro => {
      if(erro.status == 401){
        //insere um pop-up para o usuário - indica uma maior usabilidade(UX)
        alert('Usuario ou senha inválidos!')
      }
    }
    
    )
  }


}
