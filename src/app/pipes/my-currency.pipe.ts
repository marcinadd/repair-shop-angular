import {Pipe, PipeTransform} from '@angular/core';
import {CurrencyPipe} from '@angular/common';
import {environment} from '../../environments/environment';

@Pipe({
  name: 'myCurrency'
})
export class MyCurrencyPipe implements PipeTransform {
  constructor(private currencyPipe: CurrencyPipe) {

  }

  transform(value: any): string {
    return this.currencyPipe.transform(value, environment.currency);
  }
}
