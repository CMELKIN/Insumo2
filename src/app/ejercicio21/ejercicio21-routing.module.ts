import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { Ejercicio21Page } from './ejercicio21.page';

const routes: Routes = [
  {
    path: '',
    component: Ejercicio21Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ejercicio21PageRoutingModule {
  constructor(private router: Router) {}

  next() {
    this.router.navigate(['ejercicio21']);
  }
  prev() {
    this.router.navigate(['home']);
  }
}
