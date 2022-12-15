import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dynamic',
})
export class DynamicPipe implements PipeTransform {
  transform(value: string, modifier: string) {
    if (!modifier) return value;

    return eval('this.' + modifier + "('" + value + "')");
  }

  tel(value: any) {
    const data = value;
    let finalValue = ''

    data.length > 10
      ? finalValue = `(${data.slice(0,2)}) ${data.slice(2,7)}-${data.slice(7,12)}`
      : finalValue = `(${data.slice(0,2)}) ${data.slice(2,6)}-${data.slice(6,10)}`;

    return finalValue;
  }

  cep(value: any) {
    const data = value;
    let finalCep = `${data.slice(0,5)}-${data.slice(5,8)}`

    return finalCep;
  }
}
