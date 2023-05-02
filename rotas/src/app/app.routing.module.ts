import { ModuleWithProviders, NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
//import { CursosModule } from './cursos/cursos.module';

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
//import { CursosComponent } from "./cursos/cursos.component";
//import { CursoDetalheComponent } from "./cursos/curso-detalhe/curso-detalhe.component";
//import { CursoNaoEncontradoComponent } from "./cursos/curso-nao-encontrado/curso-nao-encontrado.component";

const appRoutes : Routes = [

    //{path : 'cursos', loadChildren: 'app/cursos/cursos.module#CursosModule'},

    //{path: 'cursos', 
    //loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule)},

    {path : 'login', component : LoginComponent },
    {path : '', component : HomeComponent },

    //path de cursos, nao precisa pois ja temos o file cursos.routing.module
    //{path : 'cursos', component : CursosComponent },
    //{path : 'curso/:id', component : CursoDetalheComponent },
    //{path : 'naoEncontrado', component : CursoNaoEncontradoComponent }
];

@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
})
export class AppRoutingModule{

}