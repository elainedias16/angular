import { Component , Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent {

  @Input() valor  = 0
  @Output() mudouValor = new EventEmitter() //essa evento sera vista pelo componente pai

 
  incrementa(){
    this.valor++
    this.mudouValor.emit({novoValor : this.valor}) //emitindo evento
  }

  decrementa(){
    this.valor-- 
    this.mudouValor.emit({novoValor : this.valor}) //emitindo evento

  }

 
  constructor(){

  }
}
