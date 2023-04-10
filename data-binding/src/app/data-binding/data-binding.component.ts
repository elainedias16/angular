import { Component , Output, Input} from '@angular/core';

@Component({
  selector: 'app-data-binding', //se quiser usar como tag HTML
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {


  url: string = 'http://loiane.com';
  cursoAngular : boolean = true;
  urlImage: string = 'https://picsum.photos/200'
  valorAtual: string  = ''
  valorSalvo : string = ''
  isMouseOver : boolean = false;
  nome : string = 'abc'
  idade: number = 13

  nomeDoCurso: string = 'Angular'
  valorInicial = 15

  pessoa: any = {
    nome: 'def',
    idade: 20
  }


  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('botao clicado!');
  }

  onKeyUp(evento : KeyboardEvent){
    // console.log(evento)
    console.log( (<HTMLInputElement>evento.target).value );
    this.valorAtual = (<HTMLInputElement>evento.target).value
  }

  salvarValor(valor : string){
    this.valorSalvo = valor
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
    console.log(this.isMouseOver)
  }

  onMudouValor(evento : any){   //funcao para receber evento do componente filho
    console.log(evento.novoValor)
  }


  constructor(){

  }




}
