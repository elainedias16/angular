import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';

// const alunosRoutes: Routes = [
//     {path : 'alunos' , component : AlunosComponent},
//     {path : 'alunos/novo' , component : AlunoFormComponent},
//     {path : 'alunos/:id ' , component : AlunoDetalheComponent},
//     {path : 'alunos/:id/editar' , component : AlunoFormComponent}
// ]

//Creating routes with child routes:
const alunosRoutes: Routes = [
    {path : 'alunos' , component : AlunosComponent, children:[
        {path : 'novo' , component : AlunoFormComponent},
        {path : ':id' , component : AlunoDetalheComponent},
        {path : ':id/editar' , component : AlunoFormComponent}
    ]},
   
]

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule {}