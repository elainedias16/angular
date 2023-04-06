import { Directive, ElementRef , Renderer2} from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]'
  // selector: '[fundoAmarelo]' Se colocar p[fundoAmarelo] , a diretivo eh aplicado a tags do tipo p
  //se colocar buttton[fundoAmarelo], a diretiva só eh aplicada a tags tipo button

})
export class FundoAmareloDirective {

  constructor(private _elementRef : ElementRef,
    private _renderer : Renderer2) {
    
    // console.log(this._elementRef)

    // this._elementRef.nativeElement

    //this._elementRef.nativeElement.style.backgroundColor = 'yellow' //tentar nao fazer isso por questao
    //de seguranca

    // console.log(this._elementRef.nativeElement.style.backgroundColor)

    this._renderer.setStyle(this._elementRef.nativeElement,
      'background-color', 
      'yellow')


   }

}
