import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {Service} from '../entity/Service';
import {Order} from '../entity/Order';
import {Router} from '@angular/router';
const items = { ...sessionStorage };
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})

export class OrdersComponent implements OnInit {
  services: Order[] = [];
  obj: any;
  constructor(private title: Title, private router: Router) {
    this.title.setTitle('Мої замовлення');
    for ( let i = 0, len = sessionStorage.length; i < len; i++ ) {
      this.services.push(JSON.parse(sessionStorage.getItem(sessionStorage.key(i))));
    }
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  deleteOrder(id){
    sessionStorage.removeItem('service' + id);
    window.location.reload();
  }

  ngOnInit(): void {
  }

}
