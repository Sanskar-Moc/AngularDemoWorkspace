import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'aadhaarno'
})
export class AadhaarnoPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    let delim: string = args[0];
    console.log('value ' + value + " delim" + delim)
    let first: string = value.toString().substr(0, 4);
    let second: string = value.toString().substr(4, 4);
    let third: string = value.toString().substr(8, 4);
    return `${first}${delim}${second}${delim}${third}`;
  }

}
