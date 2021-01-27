import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Service} from '../entity/Service';
import {Salon} from '../entity/Salon';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  page = 1;
  pageSize = 4;
  name: string;
  hidden = true;
  result: any[] = [];
  services: Service[];
  salons: Salon[];
  hiddenSearch = false;
  authorized: boolean;
  constructor(private httpClient: HttpClient, private router: Router) {
    this.httpClient.get<Service[]>('http://localhost:8080/services').subscribe(value => {
      this.result = value;
    });
    this.httpClient.get<Salon[]>('http://localhost:8080/salons').subscribe(value => {
      value.forEach(value1 => {
        this.result.push(value1);
      });
    });
    if (localStorage.getItem('token')){
      this.authorized = true;
    } else {
      this.authorized = false;
    }
  }

  refresh() {
    this.result = this.result
      .map((country, i) => ({id: i + 1, ...country}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  search(){
    if (this.name === ''){
      this.ngOnInit();
    } else {
      this.result = this.result.filter(res => {
        return res.name.toLowerCase().match(this.name.toLocaleLowerCase());
      });
      console.log(this.result);
      this.hidden = false;
    }
  }

  toPage(id, type){
    this.router.navigate(['salons', type, id]);
  }

  ngOnInit(): void {
    this.httpClient.get<Service[]>('http://localhost:8080/services').subscribe(value => {
      this.result = value;
    });
    this.httpClient.get<Salon[]>('http://localhost:8080/salons').subscribe(value => {
      value.forEach(value1 => {
        this.result.push(value1);
      });
    });
    this.refresh();
  }

}
