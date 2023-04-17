import { Component, EventEmitter, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [ CursosService ]
})
export class CursosComponent implements OnInit {

  cursos : string[] = []
  //cursosService : CursosService


  //Jeito 1 SEM INJECAO DE DEPENDENCIA
  // constructor(){
  //   this.cursosService = new CursosService()

  // }

  //Jeito 2 INJECAO DE DEPENDECIA
  // constructor(_cursosService : CursosService){
  //   this.cursosService = _cursosService

  // }
  
  //JEITO 3 COM INJECAO DE DEPENDECIA , MELHOR JEITO
  //so q precisa comentar a varival cusosService na linha 13
  constructor(private cursosService : CursosService){

  }
  

  ngOnInit(){
    this.cursos = this.cursosService.getCursos()

    // this.cursosService.emitirCursoCriado.subscribe(
    //   function(curso){
    //     console.log(curso)
    //   }
    // )

    // this.cursosService.emitirCursoCriado.subscribe(

    //   curso => console.log(curso)
      
    // )

    CursosService.criouNovoCurso.subscribe(

      // curso => console.log(curso)
      curso => this.cursos.push(curso)
      
    )


  
  }

}
