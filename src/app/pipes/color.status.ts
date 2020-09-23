import {Pipe, PipeTransform} from '@angular/core';
@Pipe ({
   name : 'colorstatus'
})
export class ColorStatusPipe implements PipeTransform {
   transform(val : number) : string {
    if(val == null){
     return `<span class="label other">Unknown</span>`;
     }
    else if(val < 0){
      return `<span class="label info">Late</span>`;
    }
    else if(val >= 300 ){
      return `<span class="label danger">Early</span>`;
    }
    else{
      return `<span class="label success">On Time</span>`;
    }
   }
}
