import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { SettingsService } from './settings.service';
import { FiltroArrayPipe } from './filtro-array.pipe';

import { FormsModule } from '@angular/forms';
import { FiltroArrayImpuroPipe } from './filtro-array-impuro.pipe';


@NgModule({
  declarations: [ //components, directives and pipes should stay on declaration
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe,
    FiltroArrayImpuroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    // {
    //   provide : LOCALE_ID,
    //   useValue : 'pt-BR'
    //   // useClass: ,
    //   // useFactory : ''
    // }
    // SettingsService,
    // {
    //   provide : LOCALE_ID,
    //   deps : [SettingsService],
    //   useFactory : ( settingsService : any  ) => settingsService.getLocale()
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
