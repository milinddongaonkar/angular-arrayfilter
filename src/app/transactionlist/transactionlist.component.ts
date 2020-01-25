import { Component, OnInit } from '@angular/core';
import { MyserviceService, MyDataType } from '../myservice.service';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { FormBuilder , Validators} from '@angular/forms';
import { ValidationService } from '../validation.service';



@Component({
  selector: 'app-transactionlist',
  templateUrl: './transactionlist.component.html', 
  styleUrls: ['./transactionlist.component.css']
})
export class TransactionlistComponent implements OnInit {

  userForm: any;

  constructor(private formBuilder: FormBuilder, private m:MyserviceService) { 
    this.userForm = this.formBuilder.group({
      account1: ['', [Validators.required, ValidationService.accountValidator]],
      account2 : ['', [Validators.required, ValidationService.accountValidator]],
      amount: ['', [Validators.required, ValidationService.amountValidator]],
      date : ['',Validators.required]
    });

    console.log(this.userForm);
  }
  onSubmit(event) {
    if (this.userForm.invalid) {
      return;
  }
    let data = JSON.stringify(this.userForm.value);
    this.m.adddata(data);
  }


  ngOnInit() {

  }

  /* register (myForm: NgForm) {
    console.log('Successful registration');
    console.log(myForm);
  }*/
  saveUser() {
    if (this.userForm.dirty && this.userForm.valid) {
      alert(`From: ${this.userForm.value.fromaccount} To: ${this.userForm.value.toaccount}`);
    }
  }
}


