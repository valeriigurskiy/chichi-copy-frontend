import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Salon} from '../entity/Salon';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-salons',
  templateUrl: './salons.component.html',
  styleUrls: ['./salons.component.css']
})
export class SalonsComponent implements OnInit {

  type: string;
  test: string;
  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient) {

  }

  ngOnInit(): void {
  }

}
