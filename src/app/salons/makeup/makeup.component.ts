import { Component, OnInit } from '@angular/core';
import {Salon} from '../../entity/Salon';
import {HttpClient} from '@angular/common/http';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-makeup',
  templateUrl: './makeup.component.html',
  styleUrls: ['./makeup.component.css']
})
export class MakeupComponent implements OnInit {

  salons: Salon[];
  constructor(private httpClient: HttpClient, private title: Title) {
    this.title.setTitle('Макіяж');
    this.httpClient.get<Salon[]>('http://localhost:8080/salons/type/makeup').subscribe(value => this.salons = value);
  }

  ngOnInit(): void {
  }

}
