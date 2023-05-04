import { FormsModule } from '@angular/forms';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AlunoFormComponent } from "../alunos/aluno-form/aluno-form.component";
import { IFormCanDeactivate } from './iform-deactivate';


@Injectable()
export class AlunosDeactivateGuard {

    constructor(){

    }

    canDeactivate(
        //component: AlunoFormComponent,
        component: IFormCanDeactivate,

        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {

        console.log('guarda de desativacao da rota')
        //return component.podeMudarRota();
        return component.podeDesativar()
    }


}