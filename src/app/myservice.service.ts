import { Injectable } from '@angular/core';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
@Injectable()
export class MyserviceService {

 
  mydata: MyDataType[] = [];

  constructor() { }

  getData():Observable<MyDataType[]>
  {
    let data = new Observable<MyDataType[]>(observer => {
          setTimeout(() => {
              observer.next(this.mydata);
          }, 1);
    });
    return data;
  }
  adddata(data){
    this.mydata.push(JSON.parse(data));
  }
}

export class MyDataType
{
  public account1: string;
  public account2: string;
  public amount:string;
  public date:Date;
  
}