import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit{

  formulario : FormGroup

  constructor(
    private formBuilder : FormBuilder,
    private httpClient : HttpClient
  ){

  }
  

  ngOnInit(): void {
      // this.formulario = new FormGroup({
      //   nome : new FormControl(null),
      //   email : new FormControl(null)
      // })
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email : [null, [Validators.required , Validators.email]]
    })

    //Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
  }

  onSubmit(){
    console.log(this.formulario.value)

    this.httpClient.post('http://httpbin.org/post', JSON.stringify(this.formulario.value))
    .pipe(map(res => res))
    .subscribe(dados => {
      console.log(dados);
      //reseta o form
      this.formulario.reset()
    },
    (error : any) => alert('erro'));
  }

  resetar(){
    this.formulario.reset()
  }

  verificaValidTouched(campo : any){
    return !this.formulario.get(campo)?.valid && this.formulario.get(campo)?.touched

    //return !campo.valid && campo.touched
  }

  aplicaCssErro(campo : any){
    return{
      'has-error' : this.verificaValidTouched(campo),
      'has-feedback' : this.verificaValidTouched(campo)
    }
  }
}
