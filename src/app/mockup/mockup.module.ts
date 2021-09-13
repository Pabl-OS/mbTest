import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockupComponent } from './mockup.component';
import { MockupRoutingModule } from './mockup-routing.module';



@NgModule({
  declarations: [
    MockupComponent,
  ],
  imports: [
    CommonModule,
    MockupRoutingModule
  
  ]
})
export class MockupModule { }
