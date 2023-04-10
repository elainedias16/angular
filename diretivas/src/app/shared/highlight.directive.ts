import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  //Ouve evento no hospedeiro da diretiva
  @HostListener('mouseenter') onMouseOver(){
    this.backgroundColor =  this.highlightColor
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.backgroundColor = this.defaultColor

  }

  //Permite o binding de um atributo ou uma classe a uma variavel
  @HostBinding('style.backgroundColor') backgroundColor : string

  @Input() defaultColor : string = 'white'
  @Input() highlightColor : string = 'yellow'

  constructor() { }


  ngOnInit(){
    this.backgroundColor = this.defaultColor
  }

}
