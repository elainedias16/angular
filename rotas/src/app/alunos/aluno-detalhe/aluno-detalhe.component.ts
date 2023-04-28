import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy{

  id : number
  inscricao : Subscription
  aluno : any
  paramter : any

  constructor(
    private route : ActivatedRoute,
    private alunosService : AlunosService){

  }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: Params) => {

        this.paramter = params
        console.log(this.paramter['id'])
        // console.log(this.id)
        //this.aluno = this.alunosService.getAluno(this.id)
      }
    )
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe()
  }
  
  
}
