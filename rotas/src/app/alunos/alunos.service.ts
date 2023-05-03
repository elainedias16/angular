import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos = [
    {id: 1 , nome : 'Alunos 01', email : 'alunos01@email.com'},
    {id: 2 , nome : 'Alunos 02', email : 'alunos02@email.com'},
    {id: 3 , nome : 'Alunos 03', email : 'alunos03@email.com'},
    {id: 4 , nome : 'Alunos 04', email : 'alunos04@email.com'},
    {id: 5 , nome : 'Alunos 05', email : 'alunos05@email.com'}
  ]

  getAlunos(){
    return this.alunos
  }


  getAluno(id : number){
    let alunos : any = []
    alunos = this.getAlunos()

    for(let i = 0; i < this.alunos.length ; i++){
      let aluno = this.alunos[i]

      if(aluno.id == id){
        return aluno
      }
    }

    return null
  }

  constructor() { }
}
