import { Component, OnInit } from '@angular/core';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import {NgForm} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MyserviceService, MyDataType } from '../myservice.service';
import { OrderModule } from 'ngx-order-pipe';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css']
})
export class SortingComponent implements OnInit {

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
   $(document).ready(() => {
      $('#mytable').colResizable({'liveDrag': true});
    });
 }

  // sorting logic
  key = 'account1'; // sort default by name
  reverse = false;
  sortList(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

}