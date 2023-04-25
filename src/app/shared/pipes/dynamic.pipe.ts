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
    const data = value;
    let finalValue = '';

    data.length > 10
      ? (finalValue = `(${data.slice(0, 2)}) ${data.slice(2, 7)}-${data.slice(
          7,
          12
        )}`)
      : (finalValue = `(${data.slice(0, 2)}) ${data.slice(2, 6)}-${data.slice(
          6,
          10
        )}`);

    return finalValue;
  }

  cep(value: string) {
    const data = value;
    let finalCep = `${data.slice(0, 5)}-${data.slice(5, 8)}`;

    return finalCep;
  }

  type(value: string) {
    let valueTransform = '';

    value === 'product'
      ? (valueTransform = 'Produto')
      : (valueTransform = 'Serviço');

    return valueTransform;
  }

  document(value: any) {
    const cnpjCpf = value.replace(/\D/g, '');
    
    if (cnpjCpf.length === 11) {
      return cnpjCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "\$1.\$2.\$3-\$4");
    } else {
      return cnpjCpf.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "\$1.\$2.\$3/\$4-\$5");
    };
  }

  price(value: string) {
    const price = Number(value);

    return price.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  date(value: string) {
    return new Date(value).toLocaleDateString();
  }

  paid(value: string) {
    if (value === 'true') return 'Pago';
    else return 'Não pago';
  }
}
