import {PipeTransform, Pipe} from "@angular/core";

@Pipe({
    name: 'short'
})
export class ShortPipe implements PipeTransform{
  transform(value:any, args:any):any {
    return value.substr(0,1).toUpperCase();
  }

}
