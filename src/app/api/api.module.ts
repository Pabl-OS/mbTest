import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiRoutingModule } from './api-routing.module';
import { SearchComponent } from './pages/search/search.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { FormsModule } from '@angular/forms';

import { RadomComponent } from './pages/radom/radom.component';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    SearchComponent,
    HeroCardComponent,
    RadomComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ApiRoutingModule,
    FormsModule
  ]
})
export class ApiModule { }
