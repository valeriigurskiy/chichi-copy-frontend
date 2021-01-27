import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authCode: number;
  incorrectAuthCode: boolean = false;
  userEmails = new FormGroup({
    email: new FormControl('', Validators.email),
  });
  mailSended: boolean = false;
  constructor(private httpClient: HttpClient, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    if (localStorage.getItem('token')){
      this.router.navigate(['/']);
    }
  }

  sendToken(){
    this.mailSended = true;
    this.httpClient.get<number>('http://localhost:8080/users/user/' + this.userEmails.get('email').value).subscribe(value => this.authCode = value,
      error => {
        this.authCode = 0;
      });
  }

  login(token){
    const authCodeBack = Number(this.authCode);
    const authCode = Number(token);
    if (authCode === authCodeBack){
      localStorage.setItem('token', this.userEmails.get('email').value);
      window.location.reload();
      this.incorrectAuthCode = false;
    } else {
      this.incorrectAuthCode = true;
    }
  }

  ngOnInit(): void {
  }

}
