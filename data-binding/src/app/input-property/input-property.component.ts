import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  // inputs: ['nomeCurso'] //se quiser expor a varivel com nome diferente, ['nomeInterno: nomeExterno']
})
export class InputPropertyComponent {
  
  @Input() nomeCurso : string = '' //melhor escrever assim
  // @Input(nome) nomeCurso : string = ''  //se quiser expor a varivel com nome diferente
  //coloca o nome pra expor dentro do parenteses da diretiva 
  // nomeCurso : string = '' // se nao quiser colocar a diretiva na frente, basta colocar dentro do @Component

  constructor(){

  }
}
