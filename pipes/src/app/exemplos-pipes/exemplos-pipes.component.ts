import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { interval } from 'rxjs';


@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit{

  livro : any = {
    titulo : "The best book in the world!",
    rating : 4.53241,
    numeroPaginas: 350,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url : 'http://a.co/glqjpRP'

  }

  livros : string[] = [ 'Java', 'Angular 2']

  filtro : string

  valorAsync = new Promise((resolve, reject) =>{
    setTimeout(() => resolve('Valor assincrono'), 2000)

  })

  valorAsync2 = Observable.interval(2000)

  addCurso(valor : string){
    this.livros.push(valor)
    console.log(this.livros)
  }

  obterCursos(){

    if( this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === '' ){
      return this.livros
    }


    return this.livros.filter( (v) =>{
      if(v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0){
        return true
      }
      return false
    }

    )
    
    
  }



  constructor(){

  }

  ngOnInit(): void {
      
  }
}
