import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../customer.service';
import {Customer} from '../customer';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  private createForm: FormGroup;

  constructor(private fb: FormBuilder, private customerService: CustomerService) {
  }

  ngOnInit() {
    this.createForm = this.fb.group({
      firstName: [''],
      lastName: ['']
    });
  }

  onsubmit() {
    const {value} = this.createForm;
    this.customerService.createCustomer(value).subscribe(next => {
        this.createForm.reset({
          firstName: [''],
          lastName: ['']
        });
      }
    );
  }
}
