import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'api',
    loadChildren:() => import('./api/api.module').then(m =>m.ApiModule)
  },
  {
    path:'mockup',
    loadChildren:() => import('./mockup/mockup.module').then(m => m.MockupModule)
  },
  {
    path:'**',
    redirectTo:'mockup'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
