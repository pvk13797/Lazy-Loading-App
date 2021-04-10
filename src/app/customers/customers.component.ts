import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  name: string;
  address: string;
  city: string;
  pin: string;
  phone: number;

  Customers: any = [
    {
      name: 'Prasanna Venkat' ,
      address: '7, Dubai Street, Dubai Main Road.',
      city: 'Dubai',
      pin: '122002',
      phone: 9789985237
    },
    {
      name: 'Venkat' ,
      address: '7, Dubai Street, Dubai Main Road.',
      city: 'Dubai',
      pin: '122002',
      phone: 9707985237
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
