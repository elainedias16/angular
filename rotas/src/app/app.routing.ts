import { ModuleWithProviders } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { CursosComponent } from "./cursos/cursos.component";

const APP_ROUTES : Routes = [
    {path : 'login', component : LoginComponent },
    {path : '', component : HomeComponent },
    {path : 'cursos', component : CursosComponent },

];

export const routing : ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);