import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit = 25, completeWords = false, ellipsis = '...') {
    if (completeWords) {
      if (value.length <= limit) {
        ellipsis = '';
      } else {
        limit = value.substr(0, limit).lastIndexOf(' ');
      }
    }
    return `${value.substr(0, limit)}${ellipsis}`;
  }
}
