import {CommonModule} from "@angular/common";
import {Pipe, PipeTransform} from '@angular/core';
@Pipe ({
   name : 'routevariant'
})
export class RouteVariantPipe implements PipeTransform {
   transform(val : string) : string {
    const splittedString = this.SplitString(val);
    if(splittedString.length === 3)
      return '<strong>' + splittedString[0] + '</strong> ' + splittedString[1] + " " + splittedString[2];
    else
      return val;
   }


   SplitString(val): string {
    return val.split(" ");
   }
}
