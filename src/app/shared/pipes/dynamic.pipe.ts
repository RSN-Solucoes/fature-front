import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dynamic',
})
export class DynamicPipe implements PipeTransform {
  transform(value: string, modifier: string) {
    if (!modifier) return value;

    return eval('this.' + modifier + "('" + value + "')");
  }

  tel(value: string) {
    return 'abc'
  }
}
