import { Component, OnInit } from '@angular/core';

import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import {NgForm} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MyserviceService, MyDataType } from '../myservice.service';
import {FilterPipe} from '../filter.pipe';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
 
 myObservableArray: Observable<MyDataType[]>;
  searchText:string="";
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