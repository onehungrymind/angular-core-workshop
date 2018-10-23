import { Pipe, PipeTransform } from '@angular/core';
import { Status } from '../customers/customer.model';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value === undefined || value === null) {
      return value;
    }

    return Status[value];
  }

}
