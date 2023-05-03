import { ModuleWithProviders, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


import { CursosComponent } from "./cursos.component";
import { CursoDetalheComponent } from "./curso-detalhe/curso-detalhe.component";
import { CursoNaoEncontradoComponent } from "./curso-nao-encontrado/curso-nao-encontrado.component";

const cursosRoutes : Routes = [

    //{path : 'cursos', component : CursosComponent },
    {path : 'naoEncontrado', component : CursoNaoEncontradoComponent },
    {path : '', component : CursosComponent },
    //{path : 'cursos/:id', component : CursoDetalheComponent },
    {path : ':id', component : CursoDetalheComponent }

    //{path : 'cursos/naoEncontrado', component : CursoNaoEncontradoComponent }

];

@NgModule({
    imports : [RouterModule.forChild(cursosRoutes)],
    exports : [RouterModule]
})
export class CursosRoutingModule{

}