import { Component, OnInit } from '@angular/core';
import {Salon} from '../../entity/Salon';
import {HttpClient} from '@angular/common/http';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-nails',
  templateUrl: './nails.component.html',
  styleUrls: ['./nails.component.css']
})
export class NailsComponent implements OnInit {

  salons: Salon[];
  constructor(private httpClient: HttpClient, private title: Title) {
    this.title.setTitle('Нігті');
    this.httpClient.get<Salon[]>('http://localhost:8080/salons/type/nails').subscribe(value => this.salons = value);
  }

  ngOnInit(): void {
  }

}
