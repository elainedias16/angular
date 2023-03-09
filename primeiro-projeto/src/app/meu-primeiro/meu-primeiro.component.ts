import { Component } from '@angular/core' ;

@Component( {
    selector: 'meu-primeiro-componenet', //nome da tag HTML que queremos criar
    template: `
    <p>Meu primeiro componenet com Angular 2!</p>

    ` 
    
} )
export class MeuPrimeiroComponent{}

//se o template tiver ate 3 linhas, pode escrever no mesmo arquivo, se tiver mais, precisa de um arquivo
//separado.
// Se for até 3 linhas, dentro do @Component, é só escrever template
// mas se for em outro arquivo, no @Component, é templateUrl 