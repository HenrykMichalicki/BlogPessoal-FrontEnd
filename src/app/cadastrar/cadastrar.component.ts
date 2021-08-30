import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: usuario = new this.usuario()
  confirmaSenha: string;
  tipoUsuario: string;

  constructor() { }

  ngOnInit(): void {
  }

}
