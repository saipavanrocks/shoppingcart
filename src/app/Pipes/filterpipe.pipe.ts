import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(value:any[], searchText:string, propName:string):any{
    const result:any =[];
    if(!value || searchText==='' || propName ===''){
      return value;
    }
    value.forEach((a:any)=>{
      if(a[propName].toLowerCase().includes(searchText.toLowerCase())){
        result.push(a);
      }
    });
    return result;
  }

}
