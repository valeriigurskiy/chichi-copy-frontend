import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { HomePageComponent } from './home-page/home-page.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { SingleSalonComponent } from './single-salon/single-salon.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {SalonsComponent} from './salons/salons.component';
import { BarberComponent } from './salons/barber/barber.component';
import { HairComponent } from './salons/hair/hair.component';
import { NailsComponent } from './salons/nails/nails.component';
import { EyebrowsComponent } from './salons/eyebrows/eyebrows.component';
import { MakeupComponent } from './salons/makeup/makeup.component';
import { FaceComponent } from './salons/face/face.component';
import { DepilationComponent } from './salons/depilation/depilation.component';
import { MassageComponent } from './salons/massage/massage.component';
import { OrdersComponent } from './orders/orders.component';
import { FaqComponent } from './faq/faq.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PrivacyTermsComponent } from './privacy-terms/privacy-terms.component';
import { LoginComponent } from './login/login.component';
import { LogOutComponent } from './log-out/log-out.component';

const routers = [
  {
    path: '', component: HomePageComponent
  },
  {
    path: 'salons', component: SalonsComponent
  },
  {
    path: 'salons/barber', component: BarberComponent
  },
  {
    path: 'salons/:type/:id', component: SingleSalonComponent
  },
  {
    path: 'salons/hair', component: HairComponent
  },
  {
    path: 'salons/nails', component: NailsComponent
  },
  {
    path: 'salons/eyebrows', component: EyebrowsComponent
  },
  {
    path: 'salons/makeup', component: MakeupComponent
  },
  {
    path: 'salons/face', component: FaceComponent
  },
  {
    path: 'salons/depilation', component: DepilationComponent
  },
  {
    path: 'salons/massage', component: MassageComponent
  },
  {
    path: 'orders', component: OrdersComponent
  },
  {
    path: 'faq', component: FaqComponent
  },
  {
    path: 'about-us', component: AboutUsComponent
  },
  {
    path: 'privacy-terms', component: PrivacyTermsComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'logout', component: LogOutComponent
  }
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SingleSalonComponent,
    HeaderComponent,
    FooterComponent,
    SalonsComponent,
    BarberComponent,
    HairComponent,
    NailsComponent,
    EyebrowsComponent,
    MakeupComponent,
    FaceComponent,
    DepilationComponent,
    MassageComponent,
    OrdersComponent,
    FaqComponent,
    AboutUsComponent,
    PrivacyTermsComponent,
    LoginComponent,
    LogOutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routers),
    HttpClientModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
