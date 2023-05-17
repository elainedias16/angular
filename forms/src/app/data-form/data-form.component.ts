import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs';
import { CampoControlErroComponent } from '../shared/campo-control-erro/campo-control-erro.component';
import { DropdownService } from '../shared/services/dropdown.service';
import { EstadoBr } from '../shared/models/estado-br';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit{

  formulario : FormGroup
  //estados : EstadoBr[]
  estados : Observable<any>
  //estados : Observable<EstadoBr[]>
  cargos : any[]
  tecnologias : any[]
  newsletter : [null]
  newsletterOp: any[]


  comparartecnologias: (o1: any,o2: any) => boolean;

  constructor(
    private formBuilder : FormBuilder,
    private httpClient : HttpClient,
    private dropDownService : DropdownService,
    private cepService : ConsultaCepService
    ){

  }
  
  

  ngOnInit(): void {
      // this.formulario = new FormGroup({
      //   nome : new FormControl(null),
      //   email : new FormControl(null)
      // })

    this.estados = this.dropDownService.getEstadosBr()
    this.cargos = this.dropDownService.getCargos()
    this.tecnologias = this.dropDownService.getTecnologias()
    // this.dropDownService.getEstadosBr()
    // .subscribe( (dados : any) => { this.estados = dados ; console.log(this.estados)})  
    this.newsletterOp = this.dropDownService.getNewsletter()


    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email : [null, [Validators.required , Validators.email]],

      endereco: this.formBuilder.group({
        cep : [null , Validators.required],
        numero: [null , Validators.required],
        complemento : [null],
        rua: [null , Validators.required],
        bairro : [null , Validators.required],
        cidade : [null , Validators.required],
        estado : [null , Validators.required],
      }),

      cargo: [null],
      tecnologias : [null],
      newsletter : [null]

    })

    //Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
  }

  onSubmit(){
    //console.log(this.formulario.value)

    if(this.formulario.valid){
      this.httpClient.post('http://httpbin.org/post', JSON.stringify(this.formulario.value))
      .pipe(map(res => res))
      .subscribe(dados => {
        console.log(dados);
        //reseta o form
        //this.formulario.reset()
      },
      (error : any) => alert('erro'));

    }else {
      console.log('formulario inválido')
      this.verificaValidacoesForm(this.formulario)
    }


  }

  verificaValidacoesForm(formGroup : FormGroup){
      Object.keys(formGroup.controls).forEach(campo => {
      console.log(campo)
      const controle = formGroup.get(campo)
      controle?.markAsDirty()
      if(controle instanceof FormGroup){
        this.verificaValidacoesForm(controle)
      }

    })
  }



  resetar(){
    this.formulario.reset()
  }

  verificaValidTouched(campo : string){
    return !this.formulario.get(campo)?.valid && (this.formulario.get(campo)?.touched || this.formulario.get(campo)?.dirty)

    //return !campo.valid && campo.touched
  }

  verificaEmailInvalido(){
    let campoEmail = this.formulario.get('email')

    if(campoEmail?.errors) {
      return campoEmail?.errors['email'] && campoEmail.touched

    }
    
  }

  aplicaCssErro(campo : string){
    return{
      'has-error' : this.verificaValidTouched(campo),
      'has-feedback' : this.verificaValidTouched(campo)
    }
  }


  consultaCEP() {

    let cep = this.formulario.get('endereco.cep')?.value;
    
    if(cep != null && cep != ''){
      this.cepService.consultaCEP(cep)
      .subscribe(dados => this.populaDadosForm(dados))

    }
   
  }

  populaDadosForm(dados : any) {
    this.formulario.patchValue({
      endereco: {
        rua: dados.logradouro,
        // cep: dados.cep,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });

    // console.log(form);
  }


  resetaDadosForm() {
    this.formulario.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    })
  }


  setarCargo(){
    const cargo = {nome:'Dev', nivel: 'Pleno', desc: 'Dev Pl'}
    this.formulario.get('cargo')?.setValue(cargo)
  
  
  }

  compararCargos(obj1 : any, obj2 : any){
    return obj1 && obj2 ? (obj1.nome === obj2.nome && obj1.nivel === obj2.nivel) : obj1 === obj2
  }

  setarTecnologias(){
    this.formulario.get('tecnologias')?.setValue(['java', 'javascript', 'php'])
  }

  
}
