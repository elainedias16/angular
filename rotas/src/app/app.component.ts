import { Subscription } from 'rxjs';
import { AuthService } from './login/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rotas';

  mostrarMenu : boolean = false

  inscricao : Subscription

  constructor(private authService: AuthService){

  }


  ngOnInit(){
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    )
  }

}
