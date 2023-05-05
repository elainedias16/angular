import { AuthGuard } from './guards/auth.guard';
import { ModuleWithProviders, NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
//import { CursosModule } from './cursos/cursos.module';

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { CursosGuard } from './guards/cursos.guard';
import { AlunosGuard } from './guards/alunos.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
//import { CursosComponent } from "./cursos/cursos.component";
//import { CursoDetalheComponent } from "./cursos/curso-detalhe/curso-detalhe.component";
//import { CursoNaoEncontradoComponent } from "./cursos/curso-nao-encontrado/curso-nao-encontrado.component";

const appRoutes : Routes = [

    //{path : 'cursos', loadChildren: 'app/cursos/cursos.module#CursosModule'},

    {path: 'cursos', 
    loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule),
    canActivate: [AuthGuard],
    canActivateChild: [CursosGuard],
    canLoad : [AuthGuard]
    },

    {path : 'alunos',
    loadChildren : () => import('./alunos/alunos.module').then(m => m.AlunosModule),
    canActivate: [AuthGuard],
    //canActivateChild : [AlunosGuard]
    canLoad : [AuthGuard]
    },

    {path : 'login', component : LoginComponent },

    {path : '', component : HomeComponent, 
    canActivate: [AuthGuard]},

    {path : '**', component : PaginaNaoEncontradaComponent}

    //path de cursos, nao precisa pois ja temos o file cursos.routing.module
    //{path : 'cursos', component : CursosComponent },
    //{path : 'curso/:id', component : CursoDetalheComponent },
    //{path : 'naoEncontrado', component : CursoNaoEncontradoComponent }
];

@NgModule({
    imports : [RouterModule.forRoot(appRoutes, {useHash : true})],
    exports : [RouterModule]
})
export class AppRoutingModule{

}