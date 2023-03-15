import { Component , Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent {

  @Input() valor  = 0

  @Output() mudouValor = new EventEmitter()

  onMudouValor(evento: any){
    console.log(evento)
  }

  
  incrementa(){
    this.valor++
    this.mudouValor.emit({novoValor : this.valor})
  }

  decrementa(){
    this.valor-- 
    this.mudouValor.emit({novoValor : this.valor})

  }

 
  constructor(){

  }
}
