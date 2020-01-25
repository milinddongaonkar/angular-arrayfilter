import { Component, OnInit } from '@angular/core';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import {NgForm} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MyserviceService, MyDataType } from '../myservice.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {


   myObservableArray: Observable<MyDataType[]>;

  constructor(private myService: MyserviceService) {
    this.getData();
  }

  getData() {
    if (!this.myObservableArray) {
      this.myObservableArray = this.myService.getData();
    }
  }
  ngOnInit() {
  }

}