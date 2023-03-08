import { CursosModule } from './cursos/cursos.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';

@NgModule({
  declarations: [ //lista os componenetes, diretivas e pipes que iremos usar nesse modulo
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component
  ],
  imports: [ //outros modulos que queremos utilizar nesse modulo ou dentro de algum componente que pertencea esse modulo
    BrowserModule,
    AppRoutingModule,
    CursosModule  //colocar o import do componente aqui tbm 
    
  ],
  providers: [], //servicos disponiveis para todos os componentes desse modulo
  bootstrap: [AppComponent] //o componente que deve ser instanciado quando iniciar a aplicacao
})
export class AppModule { }


//o bootstrap eh apenas no modulo de raiz, modulos comuns n tem isso
