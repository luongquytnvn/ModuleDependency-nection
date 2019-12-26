import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CustomerService} from '../customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Customer} from '../customer';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  editForm: FormGroup;
  customer: Customer;

  constructor(private fb: FormBuilder,
              private customerService: CustomerService,
              private route: ActivatedRoute,
              private router: Router
  ) {
  }

  ngOnInit() {
    this.editForm = this.fb.group({
      id: [''],
      firstName: [''],
      lastName: ['']
    });
    const id = this.route.snapshot.paramMap.get('id');
    this.customerService.getCustomerById(id).subscribe(next => {
        this.customer = next;
        this.editForm.patchValue(this.customer);
      },
      error => {
        console.log(error);
        this.customer = null;
      }
    );
  }

  onsubmit() {
    const {value} = this.editForm;
    console.log(value);
    this.customerService.editCustomer(value).subscribe(next => {
      this.router.navigate(['']);
    });
  }
}
