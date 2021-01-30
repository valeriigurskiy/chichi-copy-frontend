import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {Service} from '../entity/Service';
import {Order} from '../entity/Order';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Employee} from '../entity/Employee';
const items = { ...sessionStorage };
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})

export class OrdersComponent implements OnInit {
  services: Order[] = [];
  employees: Employee[] = [];
  resultSum: number;
  resultServices: any[] = [];
  constructor(private title: Title, private router: Router, private httpClient: HttpClient) {
    this.title.setTitle('Мої замовлення');
    for ( let i = 0, len = sessionStorage.length; i < len; i++ ) {
      this.services.push(JSON.parse(sessionStorage.getItem(sessionStorage.key(i))));
      this.resultServices.push(JSON.parse(sessionStorage.getItem(sessionStorage.key(i))).name);
    }
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.httpClient.get<Employee[]>('http://localhost:8080/employees/salon/' + this.services[0].salon).subscribe(value => this.employees = value);
    this.resultSum = this.services.map(this.getPrice).reduce(this.sumPrice);
  }

  getPrice(item){
    return item.price;
  }

  sumPrice(prev, next){
    return prev + next;
  }

  deleteOrder(id){
    sessionStorage.removeItem('service' + id);
    window.location.reload();
  }

  ngOnInit(): void {
  }

}
