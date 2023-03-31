import { Component , Input, Output, EventEmitter, OnInit, ViewChild , ElementRef} from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent {

  @Input() valor  = 0
  @Output() mudouValor = new EventEmitter() //essa evento sera vista pelo componente pai
  @ViewChild('campoInput') campoValorInput : ElementRef 

 
  incrementa(){
    console.log(this.campoValorInput.nativeElement.value)
    this.campoValorInput.nativeElement.value++
    // this.valor++
    this.mudouValor.emit({novoValor : this.valor}) //emitindo evento
  }

  decrementa(){
    this.campoValorInput.nativeElement.value--
    // this.valor-- 
    this.mudouValor.emit({novoValor : this.valor}) //emitindo evento

  }

 
  constructor(){
    
  }
}
