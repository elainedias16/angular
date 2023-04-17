import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosService } from './cursos.service';
import { CursosComponent } from './cursos.component';

@NgModule({
  declarations: [
   CursosComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    CursosComponent
  ],
  //providers: [ CursosService ],//servios sao declarados dentro de providers
})
export class CursosModule { }
