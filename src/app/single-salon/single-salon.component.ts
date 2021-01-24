import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Service} from '../entity/Service';
import {Salon} from '../entity/Salon';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-single-salon',
  templateUrl: './single-salon.component.html',
  styleUrls: ['./single-salon.component.css']
})
export class SingleSalonComponent implements OnInit {
  id: number;
  services: Service[];
  salon: Salon;
  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient, private title: Title) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
    });

    this.httpClient.get<Salon>('http://localhost:8080/salons/' + this.id).subscribe(value => {
      this.salon = value;
      title.setTitle(this.salon.title);
    });
    this.httpClient.get<Service[]>('http://localhost:8080/services/salon/' + this.id).subscribe(value => this.services = value);
  }

  ngOnInit(): void {
  }

}
