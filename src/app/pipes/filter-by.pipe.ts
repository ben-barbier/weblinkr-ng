import { Pipe, PipeTransform } from '@angular/core';
import {Link} from "../models/link";

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

  transform(links: Link[], searchText: string): Link[] {
    debugger;
    return links.filter((link) => {
      return link.description.includes(searchText) ||link.title.includes(searchText);
    });
  }

}
