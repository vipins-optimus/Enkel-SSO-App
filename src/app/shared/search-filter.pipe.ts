import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchFilter',
    pure: false
})
export class SearchFilter implements PipeTransform {
    transform(data: any, search?: string, propertyName?: string, propertyName2?: string): any {
        if (search === undefined) {
            return data;
        } else {
            let filteredData = data.filter(obj => obj[propertyName].toLowerCase().includes(search.toLowerCase()));
            if (propertyName2) {
                filteredData = filteredData.concat(data.filter(obj => obj[propertyName2].toLowerCase().includes(search.toLowerCase())));
            }
            return filteredData;
        }
    }
}
