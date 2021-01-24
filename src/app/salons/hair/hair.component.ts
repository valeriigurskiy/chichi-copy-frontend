import { Component, OnInit } from '@angular/core';
import {Salon} from '../../entity/Salon';
import {HttpClient} from '@angular/common/http';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-hair',
  templateUrl: './hair.component.html',
  styleUrls: ['./hair.component.css']
})
export class HairComponent implements OnInit {

  salons: Salon[];
  constructor(private httpClient: HttpClient, private title: Title) {
    this.title.setTitle('Волосся');
    this.httpClient.get<Salon[]>('http://localhost:8080/salons/type/hair').subscribe(value => this.salons = value);
  }

  ngOnInit(): void {
  }

}
