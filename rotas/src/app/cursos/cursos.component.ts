import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

import { CursosService } from './cursos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos : any[]
  pagina : number 
  inscricao : Subscription

  constructor(
    private cursosService : CursosService,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos()
    this.inscricao = this.route.queryParams.subscribe(
      (queryParams : any) => {
        this.pagina = queryParams['pagina']
      }
    )
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe()
  }

  proximaPag(){
    this.pagina++
    this.router.navigate(['/cursos'],
    {queryParams : {'pagina': this.pagina}})
  }
}
