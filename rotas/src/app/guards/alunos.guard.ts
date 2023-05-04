import { Injectable } from "@angular/core"
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router"
import { Observable } from "rxjs"

@Injectable()
export class AlunosGuard {

    constructor(){

    }

    canActivateChild(
        route : ActivatedRouteSnapshot,
        state : RouterStateSnapshot
      ) : Observable<boolean> | boolean{
        console.log(route)
        console.log(state)

        if(state.url.includes('editar')){
            //alert('Usuario sem acesso')
            //return false
        }
        return true
        
       
      }


}