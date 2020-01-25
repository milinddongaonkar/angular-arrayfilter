import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Observable} from 'rxjs';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TransactionComponent } from './transaction/transaction.component';
import { TransactionlistComponent } from './transactionlist/transactionlist.component';
import { MyserviceService } from './myservice.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterComponent } from './filter/filter.component';
import { SortingComponent } from './sorting/sorting.component';
import { OrderModule } from 'ngx-order-pipe';
import { Pipe, PipeTransform } from '@angular/core';
import { ValidationService } from './validation.service';
import { ControlComponent } from './control/control.component';
import { Filter1Service } from './filter1.service';
import { FilterPipe } from './filter.pipe';

@NgModule({
  imports:      [ OrderModule,BrowserModule, FormsModule,Ng2SearchPipeModule , ReactiveFormsModule],
  declarations: [ AppComponent, HelloComponent, TransactionComponent, TransactionlistComponent, FilterComponent, SortingComponent, ControlComponent, FilterPipe ],
  bootstrap:    [ AppComponent ],
  providers: [MyserviceService, ValidationService, Filter1Service]
})
export class AppModule { }
