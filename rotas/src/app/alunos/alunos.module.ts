import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunosService } from './alunos.service';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';

import { FormsModule } from '@angular/forms';
import { AlunosDeactivateGuard } from '../guards/alunos-deactivate.guard';



@NgModule({
    imports: [
        CommonModule,
        AlunosRoutingModule,
        FormsModule
    ],
    exports: [],
    declarations: [
        AlunosComponent, 
        AlunoFormComponent,
        AlunoDetalheComponent],
    providers: [
        AlunosService,
        AlunosDeactivateGuard
    ]
})
export class AlunosModule {}