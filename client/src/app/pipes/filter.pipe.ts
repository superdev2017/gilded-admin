import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filterData'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string, attribute?: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();

    return items.filter(it => {
      if (it && it[attribute]) {
        return it[attribute].toLowerCase().includes(searchText);
      } else {
        return it.toLowerCase().includes(searchText);
      }
    });
  }
}
