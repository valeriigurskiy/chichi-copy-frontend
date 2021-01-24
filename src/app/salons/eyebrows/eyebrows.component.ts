import { Component, OnInit } from '@angular/core';
import {Salon} from '../../entity/Salon';
import {HttpClient} from '@angular/common/http';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-eyebrows',
  templateUrl: './eyebrows.component.html',
  styleUrls: ['./eyebrows.component.css']
})
export class EyebrowsComponent implements OnInit {

  salons: Salon[];
  constructor(private httpClient: HttpClient, private title: Title) {
    this.httpClient.get<Salon[]>('http://localhost:8080/salons/type/eyebrows').subscribe(value => this.salons = value);
    this.title.setTitle('Брови та вії');
  }

  ngOnInit(): void {
  }

}
