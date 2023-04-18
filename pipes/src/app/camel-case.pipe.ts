import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    let values = values.split(' ');
    

    return null;


  }

}
