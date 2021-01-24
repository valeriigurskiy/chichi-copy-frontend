import { Component, OnInit } from '@angular/core';
import {Salon} from '../../entity/Salon';
import {HttpClient} from '@angular/common/http';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-face',
  templateUrl: './face.component.html',
  styleUrls: ['./face.component.css']
})
export class FaceComponent implements OnInit {

  salons: Salon[];
  constructor(private httpClient: HttpClient, private title: Title) {
    this.httpClient.get<Salon[]>('http://localhost:8080/salons/type/face').subscribe(value => this.salons = value);
    this.title.setTitle('Обличчя');
  }

  ngOnInit(): void {
  }

}
