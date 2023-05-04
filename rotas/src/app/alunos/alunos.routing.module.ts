import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosGuard } from '../guards/alunos.guard';
import { AlunosDeactivateGuard } from '../guards/alunos-deactivate.guard';

import { aluno } from './aluno.ts'

// const alunosRoutes: Routes = [
//     {path : 'alunos' , component : AlunosComponent},
//     {path : 'alunos/novo' , component : AlunoFormComponent},
//     {path : 'alunos/:id ' , component : AlunoDetalheComponent},
//     {path : 'alunos/:id/editar' , component : AlunoFormComponent}
// ]

//Creating routes with child routes:
const alunosRoutes: Routes = [
    {path : '' , component : AlunosComponent,
    canActivateChild : [AlunosGuard],
    children:[
        {path : 'novo' , component : AlunoFormComponent,
        canDeactivate : [AlunosDeactivateGuard]},

        {path : ':id' , component : AlunoDetalheComponent,
            resolve : { aluno }},

        {path : ':id/editar' , component : AlunoFormComponent,
        canDeactivate : [AlunosDeactivateGuard]}
    ]},
   
]

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule {}