import { Pipe, PipeTransform } from '@angular/core';

import { FiltroArrayPipe } from './filtro-array.pipe';

@Pipe({
  name: 'filtroArrayImpuro',
  pure: false

})
// export class FiltroArrayImpuroPipe implements PipeTransform {

//   // transform(value: unknown, ...args: unknown[]): unknown {
//   //   return null;
//   // }

//   transform(value: any, args?: any): any {
//     return null;
//   }

// }
export class FiltroArrayImpuroPipe extends FiltroArrayPipe {

 

}
