import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nome'
})
export class NomePipe implements PipeTransform {

  replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
  }

  transform(value: any, ...args: any[]): any {

    // var nome = value.replace(/ Da | Das | De | Do | Dos /gi, function (x) {
    //   x.toLowerCase();    
    // });
    // return nome;

    let prep = ['Da', 'Das', 'De', 'Do', 'Dos'];
    let array = value.split(" ");

    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < prep.length; j++) {
        const elementPrep = prep[j];
        const elementArray = array[i];
        if (elementArray == elementPrep) {
          let index = value.indexOf(elementArray)
          //console.log("aqui");
          value.replace(/ Da | Das | De | Do | Dos /gi, function (x) {x.toLowerCase();});
          return value;
        }
      }
    }
    return value;
  }

}
