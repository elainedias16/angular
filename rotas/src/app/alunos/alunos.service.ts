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
    let aluno
    for(let i = 0; i < this.alunos.length ; i++){
      aluno = this.alunos[i]
      console.log(aluno.id)
      if(id == aluno.id){
        console.log('entrei aqui')
        return aluno
      }
    }

    return null
  }

  constructor() { }
}
