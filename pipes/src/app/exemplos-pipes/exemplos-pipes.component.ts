import { Component, OnInit } from '@angular/core';

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


  constructor(){

  }

  ngOnInit(): void {
      
  }
}
