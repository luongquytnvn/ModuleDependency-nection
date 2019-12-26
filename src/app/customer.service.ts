import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiURL = 'http://localhost:8080/customers/';

  constructor(private http: HttpClient) {
  }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiURL);
  }

  getCustomerById(id: string): Observable<Customer> {
    return this.http.get<Customer>(this.apiURL + id);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(this.apiURL + id);
  }

  createCustomer(customer: Customer): Observable<any> {
    return this.http.post(this.apiURL, customer);
  }

  editCustomer(customer: Customer): Observable<any> {
    console.log(customer);
    return this.http.put(this.apiURL + customer.id, customer);
  }
}
