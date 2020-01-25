import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter1'
})
export class FilterPipe implements PipeTransform {

  /*  transform(value: any, sName: string): any {
    if(sName==""){
      return value;
    }
  
  var transaction=[];
  for(let i=0;i<=value.length;i++){
    console.log(sName);
    let Account1:string=value[i].account1;
    let Account2:string=value[i].account2;
    let Amount:string=value[i].amount;
   console.log(Account1);
    if(Account1.startsWith(sName)){
      transaction.push(value[i]);
    }
    if(Account2.startsWith(sName)){
      transaction.push(value[i]);
    }
    if(Amount.startsWith(sName)){
      transaction.push(value[i]);
    }
    console.log(transaction)

  } 
    return transaction;
  }*/
  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal = (val.account1.toLocaleLowerCase().includes(args)) || (val.account2.toLocaleLowerCase().includes(args))|| (val.amount.toLocaleLowerCase().includes(args)) ;
      return rVal;
    })

  }

}