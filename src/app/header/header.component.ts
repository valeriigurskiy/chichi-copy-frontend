import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Service} from '../entity/Service';
import {Salon} from '../entity/Salon';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  page = 1;
  pageSize = 4;
  name: string;
  hidden = true;
  result: any[] = [];
  services: Service[];
  salons: Salon[];
  hiddenSearch = false;
  authorized: boolean;
  closeResult = '';
  selectedValue: any;
  types = [
    {title: 'Барбер', title_eng: 'barber'},
    {title: 'Волосся', title_eng: 'hair'},
    {title: 'Нігті', title_eng: 'nails'},
    {title: 'Брови та вії', title_eng: 'eyebrows'},
    {title: 'Макіяж', title_eng: 'makeup'},
    {title: 'Обличчя', title_eng: 'face'},
    {title: 'Видалення волосся', title_eng: 'depilation'},
    {title: 'Масаж', title_eng: 'massage'}
  ];
  form: FormGroup;

  constructor(private httpClient: HttpClient, private router: Router, private modalService: NgbModal) {
    this.httpClient.get<Service[]>('http://localhost:8080/services').subscribe(value => {
      this.result = value;
    });
    this.httpClient.get<Salon[]>('http://localhost:8080/salons').subscribe(value => {
      value.forEach(value1 => {
        this.result.push(value1);
      });
    });
    if (localStorage.getItem('token')){
      this.authorized = true;
    } else {
      this.authorized = false;
    }
    this.form = new FormGroup({
      type: new FormControl(null)
    });
  }

  get type(): string {
    return this.form ? this.form.get('type').value : '';
  }

  refresh() {
    this.result = this.result
      .map((country, i) => ({id: i + 1, ...country}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  search(){
    if (this.name === ''){
      this.ngOnInit();
    } else {
      this.result = this.result.filter(res => {
        return res.name.toLowerCase().match(this.name.toLocaleLowerCase());
      });
      console.log(this.result);
      this.hidden = false;
    }
  }

  toPage(id, type){
    this.router.navigate(['salons', type, id]);
  }

  ngOnInit(): void {
    this.httpClient.get<Service[]>('http://localhost:8080/services').subscribe(value => {
      this.result = value;
    });
    this.httpClient.get<Salon[]>('http://localhost:8080/salons').subscribe(value => {
      value.forEach(value1 => {
        this.result.push(value1);
      });
    });
    this.refresh();
  }

  addSalon(name, description, city, address, instagram, type, image){
    const salon = { name: name,
      description: description,
      city: city,
      address: address,
      comments: ' ',
      instagram: instagram,
      type: type,
      image: image
    };
    this.httpClient.post('http://localhost:8080/salons', salon).subscribe(value => console.log(value));
    // console.log(name, description, city, address, comments, instagram, type, image);
  }

  log(type){
    console.log(type);
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }
}
