import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapValues',
})
export class MapValuesPipe implements PipeTransform {
  /**
   * Takes a Map<string, Object>  object and makes it array of Object[].
   */
  transform(map: Map<string, Object>, ...args) {
    let result = [];
    if (map.entries()){
        map.forEach(value => result.push(value));
    }
    return result;
  }
}
