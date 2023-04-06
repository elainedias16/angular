import { Directive , HostListener, ElementRef, Renderer2, HostBinding} from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  //Ouve evento no hospedeiro da diretiva
  @HostListener('mouseenter') onMouseOver(){
    // this._renderer.setStyle(this._elementRef.nativeElement,
    //   'background-color',
    //   'yellow')
    this.backgroundColor = 'yellow'
  }

  @HostListener('mouseleave') onMouseLeave(){
    // this._renderer.setStyle(this._elementRef.nativeElement,
    //   'background-color',
    //   'white')
    this.backgroundColor = 'white'

  }

  //Permite o binding de um atributo ou uma classe a uma variavel
  @HostBinding('style.backgroundColor') backgroundColor : string

  constructor(
    // private _elementRef : ElementRef,
    // private _renderer : Renderer2
    ) { }

} 
