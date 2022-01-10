import { Pipe, PipeTransform } from '@angular/core';
import { Document } from './document';

@Pipe({
  name: 'documentSearch'
})
export class DocumentSearchPipe implements PipeTransform {

  transform(value: Document[], searchText?: string): Document[] {
    searchText = searchText?searchText.toLocaleLowerCase():null
    return searchText?value.filter((d:Document)=>d.title.toLocaleLowerCase().indexOf(searchText)!==-1):value;
  }

}
