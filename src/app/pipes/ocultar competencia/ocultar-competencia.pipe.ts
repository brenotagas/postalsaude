import { Pipe, PipeTransform } from '@angular/core';

declare var $: any;

@Pipe({
  name: 'ocultarCompetencia'
})
export class OcultarCompetenciaPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    $('tr[id^="201908"]').addClass('hide');
  }

  OcultarCompetenciaAtual() {
    $('tr[id^="201908"]').addClass('hide');
  }

}
