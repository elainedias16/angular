import { Component } from '@angular/core';

@Component({
  selector: 'app-operador-elvis',
  templateUrl: './operador-elvis.component.html',
  styleUrls: ['./operador-elvis.component.css']
})
export class OperadorElvisComponent {

  tarefa : any = {
    desc : 'descricao da tarefa',
    responsavel : null
  };

}
