import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Salon} from '../../entity/Salon';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-barber',
  templateUrl: './barber.component.html',
  styleUrls: ['./barber.component.css']
})
export class BarberComponent implements OnInit {
  salons: Salon[];
  constructor(private httpClient: HttpClient, private title: Title) {
    this.httpClient.get<Salon[]>('http://localhost:8080/salons/type/barber').subscribe(value => this.salons = value);
    this.title.setTitle('Барбер');
  }

  ngOnInit(): void {
  }

}
