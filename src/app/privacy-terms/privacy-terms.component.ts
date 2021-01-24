import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-privacy-terms',
  templateUrl: './privacy-terms.component.html',
  styleUrls: ['./privacy-terms.component.css']
})
export class PrivacyTermsComponent implements OnInit {

  constructor(private title: Title) {
    this.title.setTitle('Умови використання');
  }

  ngOnInit(): void {
  }

}
