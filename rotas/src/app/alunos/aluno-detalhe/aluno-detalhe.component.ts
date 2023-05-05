import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AlunosService } from '../alunos.service';
import { Aluno } from './../aluno'

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy{

  id : number
  inscricao : Subscription
  aluno : Aluno
  //paramter : any

  constructor(
    private route : ActivatedRoute,
    private router :Router,
    private alunosService : AlunosService){

  }

  ngOnInit(): void {
    
    // this.inscricao = this.route.params.subscribe(
    //   (params) => {
    //     this.id = params['id']
    //     this.aluno = this.alunosService.getAluno(this.id)
    //   }
    // )

    console.log('ngOnInit : AlunoDetalheComponent ')
    
    //it works this way
    this.inscricao = this.route.data.subscribe(
      (info) => {
        console.log('Recebendo o obj do Aluno Resolver')
        this.aluno = info['aluno']
      })

      //deveria funcionar assim tbm
    // this.inscricao = this.route.data.subscribe(
    //   (info : {aluno : Aluno} ) => {
    //     console.log(info)
    //     this.aluno = info.aluno
    //   })


  }

  editarContato(){
    this.router.navigate(["/alunos", this.aluno.id , "editar"])
  }


  ngOnDestroy(){
    this.inscricao.unsubscribe()
  }
  
  
}
