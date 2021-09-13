import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MockupComponent } from './mockup.component';


const routes: Routes = [
  {
    path: '',
    component:MockupComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MockupRoutingModule { }
