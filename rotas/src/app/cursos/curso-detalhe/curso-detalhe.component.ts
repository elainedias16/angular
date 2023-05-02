import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit{

  id : number 
  inscricao : Subscription
  curso : any
  

  constructor(
    private route : ActivatedRoute,
    private router : Router, 
    private cursosService : CursosService){
    //this.id = this.route.snapshot.params['id'];
    //console.log(this.route)
  }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params)=>{
        this.id = params['id']
        console.log(params)
        this.curso = this.cursosService.getCurso(this.id)

        if(this.curso == null){
          this.router.navigate(['/naoEncontrado'])
        }
      }
    )
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe()
  }

}
