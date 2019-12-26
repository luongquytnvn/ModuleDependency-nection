import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CustomerService} from '../customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Customer} from '../customer';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {
  customer: Customer;
  deleteForm: FormGroup;

  constructor(private fb: FormBuilder,
              private customerService: CustomerService,
              private route: ActivatedRoute,
              private router: Router
  ) {
  }

  ngOnInit() {
    this.deleteForm = this.fb.group({
      id: [''],
      firstName: [''],
      lastName: ['']
    });
    const id = this.route.snapshot.paramMap.get('id');
    this.customerService.getCustomerById(id).subscribe(next => {
        this.customer = next;
        this.deleteForm.patchValue(this.customer);
      },
      error => {
        console.log(error);
        this.customer = null;
      }
    );
  }

  onsubmit() {
    const s = confirm('Are you sure!');
    if (s) {
      const {value} = this.deleteForm;
      console.log(value);
      this.customerService.deleteCustomer(value.id).subscribe(next => {
        alert('Xoa thanh cong');
        this.router.navigate(['']);
      });
    }
  }
}
