import { Component, OnInit } from '@angular/core';
import {Salon} from '../../entity/Salon';
import {HttpClient} from '@angular/common/http';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-massage',
  templateUrl: './massage.component.html',
  styleUrls: ['./massage.component.css']
})
export class MassageComponent implements OnInit {

  salons: Salon[];
  constructor(private httpClient: HttpClient, private title: Title) {
    this.title.setTitle('Масаж')
    this.httpClient.get<Salon[]>('http://localhost:8080/salons/type/massage').subscribe(value => this.salons = value);
  }

  ngOnInit(): void {
  }

}
