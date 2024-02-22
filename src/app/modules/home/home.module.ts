import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeViewComponent } from './components/home-view/home-view.component';
import { CityModalComponent } from './components/city-modal/city-modal.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeViewComponent,
    CityModalComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
