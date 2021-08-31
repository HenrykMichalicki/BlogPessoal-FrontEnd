import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] //faz o link com o css para estilização da pagina//
})
export class AppComponent {
  constructor(public auth: AuthService) {}

}


