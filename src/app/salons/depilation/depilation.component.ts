import { Component, OnInit } from '@angular/core';
import {Salon} from '../../entity/Salon';
import {HttpClient} from '@angular/common/http';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-depilation',
  templateUrl: './depilation.component.html',
  styleUrls: ['./depilation.component.css']
})
export class DepilationComponent implements OnInit {

  salons: Salon[];
  constructor(private httpClient: HttpClient, private title: Title) {
    this.httpClient.get<Salon[]>('http://localhost:8080/salons/type/depilation').subscribe(value => this.salons = value);
    this.title.setTitle('Видалення волосся');
  }

  ngOnInit(): void {
  }

}
