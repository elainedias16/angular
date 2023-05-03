import { Usuario } from './usuario';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  //private usuario : Usuario = new Usuario()

  usuario : Usuario = new Usuario()


  constructor(
    private authService : AuthService){

  }

  fazerLogin(){
    this.authService.fazerLogin(this.usuario)
  }

  ngOnInit(){

  }

}
