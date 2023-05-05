import { Injectable } from '@angular/core';
import { CanActivateFn, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard{

  constructor(
    private authService : AuthService,
    private router : Router
  ) { }

  canActivate(
    route : ActivatedRouteSnapshot,
    state : RouterStateSnapshot
  ) : Observable<boolean> | boolean{

    console.log('AuthGuard')

    // if(this.authService.usuarioEstaAutenticado()){
    //   return true

    // } 
    // this.router.navigate(['/login'])
    // return false
    
    return this.verificarAcesso()
    
   
  }

  private verificarAcesso(){
    if(this.authService.usuarioEstaAutenticado()){
      return true

    } 
    this.router.navigate(['/login'])
    return false
    
  }


  canLoad(route: Route) : Observable<boolean> | Promise<boolean> | boolean{
    console.log('canLoad : Verificando se usuário pode carregar o modulo do code')
    
    return this.verificarAcesso()
    
  }
  
}
