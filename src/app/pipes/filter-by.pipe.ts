import {Pipe, PipeTransform} from '@angular/core';
import {Link} from "../models/link";

@Pipe({
    name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

    transform(links: Link[], searchText: string): Link[] {
        return links.filter((link) => {
            return (link.description && link.description.includes(searchText)) || (link.title && link.title.includes(searchText));
        });
    }

}
