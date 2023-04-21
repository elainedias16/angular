import { Injectable } from '@angular/core';

import { LOCALE_ID } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from '../app/app.module';




@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor() { }

  getLocale(){
    return 'pt-BR';
  }

  // platformBrowserDynamic().bootstrapModule(AppModule : any, {
  //   providers: [{provide: LOCALE_ID, useValue: 'pt-BR' }]
  // });


//   SettingsService.bootstrapModule(AppModule, { providers: [{ provide: LOCALE_ID, useValue: , "pt-BR":  }] }: {
//     providers: [{
//         provide: any;
//         useValue: any;
//         "pt-BR": any;
//     }];
// }): any
}

