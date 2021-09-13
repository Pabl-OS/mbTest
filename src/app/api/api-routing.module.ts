import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './pages/search/search.component';
import { HomeComponent } from './pages/home/home.component';
import { RadomComponent } from './pages/radom/radom.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent,
    children:[
      {
        path:'search',
        component:SearchComponent
      },
      {
        path:'random/:type',
        component:RadomComponent
      },
      {
        path:'**',
        redirectTo:'search'
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApiRoutingModule { }
