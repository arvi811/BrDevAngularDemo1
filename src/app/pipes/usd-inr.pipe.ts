import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdInr',
  standalone: true,
})
export class UsdInrPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): unknown {
    return value * 100;
  }
}
