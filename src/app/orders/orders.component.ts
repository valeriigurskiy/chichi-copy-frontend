import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {Service} from '../entity/Service';
import {Order} from '../entity/Order';
const items = { ...sessionStorage };
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})

export class OrdersComponent implements OnInit {
  services: Order[] = [];
  obj: any;
  constructor(private title: Title, private httpClient: HttpClient) {
    this.title.setTitle('Мої замовлення');
    for ( let i = 0, len = sessionStorage.length; i < len; i++ ) {
      this.services.push(JSON.parse(sessionStorage.getItem(sessionStorage.key(i))));
    }
  }

  deleteOrder(id){
    sessionStorage.removeItem('service' + id);
  }

  ngOnInit(): void {
  }

}
