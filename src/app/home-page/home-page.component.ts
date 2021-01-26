import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  images = ['frisor1_r7uUoM6du', 'h42_CClWUOonAF', 'crystal1_r45yuaIBV2', 'sakach1_qVONDZWztJ'].map((n) => `https://ik.imagekit.io/ybk08ub32xx/${n}.jpg?tr=w-700,h-330`);
  constructor(private httpClient: HttpClient, private title: Title) {
    this.title.setTitle('Головна');
  }

  ngOnInit() {
  }
}
