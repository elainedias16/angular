import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding', //se quiser usar como tag HTML
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {


  url: string = 'http://loiane.com';
  cursoAngular : boolean = true;
  urlImage: string = 'https://picsum.photos/200'


  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  constructor(){

  }




}
