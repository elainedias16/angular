import { Route, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { CursosComponent } from "./cursos/cursos.component";
import { ModuleWithProviders } from "@angular/core";

const APP_ROUTES : Routes = [
    {path : 'login', component : LoginComponent },
    {path : '', component : HomeComponent },
    {path : 'cursos', component : CursosComponent },

];

const routing : ModuleWithProviders; 