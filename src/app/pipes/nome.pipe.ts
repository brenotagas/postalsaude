import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nome'
})
export class NomePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let i = value.indexOf(" D");
    if (i != 0) {
      let nome = value.replace(" D", " d");
      return nome;
    }
    return value;
  }

}
