import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Service} from '../entity/Service';
import {Salon} from '../entity/Salon';
import {Title} from '@angular/platform-browser';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Comment} from '../entity/Comment';

@Component({
  selector: 'app-single-salon',
  templateUrl: './single-salon.component.html',
  styleUrls: ['./single-salon.component.css']
})
export class SingleSalonComponent implements OnInit {
  id: number;
  services: Service[];
  salon: Salon;
  name: string;
  comments: Comment[];

  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient,
              private title: Title, private router: Router,
              private modalService: NgbModal) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
    });

    this.httpClient.get<Salon>('http://localhost:8080/salons/' + this.id).subscribe(value => {
      this.salon = value;
      title.setTitle(this.salon.name);
    });
    this.httpClient.get<Service[]>('http://localhost:8080/services/salon/' + this.id).subscribe(value => this.services = value);
    this.httpClient.get<Comment[]>('http://localhost:8080/comments/salon/' + this.id).subscribe(value => this.comments = value);
  }

  toOrderList(id, name, price, duration, salon, image){
    if (localStorage.getItem('token')){
      const services = {id : id, name : name, price : price, duration : duration, salon : salon, image : image};
      sessionStorage.setItem('service' + id, JSON.stringify(services));
    } else {
      this.router.navigate(['login']);
    }
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  sendComment(name, content){
    const comment = {
      name: name,
      content: content,
      salon: this.id
    };
    this.httpClient.post('http://localhost:8080/comments', comment).subscribe(value => console.log(value));
  }

  addService(name, price, duration){
    const service = {
      name: name,
      type: this.salon.type,
      price: price,
      salon: this.id,
      duration: duration
    };
    this.httpClient.post('http://localhost:8080/services', service).subscribe(value => console.log(value));
  }

  search(){
    if (this.name === ''){
      this.ngOnInit();
    } else {
      this.services = this.services.filter(res => {
        return res.name.toLowerCase().match(this.name.toLocaleLowerCase());
      });
    }
  }

  ngOnInit(): void {
    this.httpClient.get<Service[]>('http://localhost:8080/services/salon/' + this.id).subscribe(value => this.services = value);
  }

}
