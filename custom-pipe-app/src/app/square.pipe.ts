import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square'
})
export class SquarePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log("Inside Transform "+value)
    return value*value;
  }

}
