import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ejercicio21PageRoutingModule } from './ejercicio21-routing.module';

import { Ejercicio21Page } from './ejercicio21.page';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ejercicio21PageRoutingModule,
    SharedModule
  ],
  declarations: [Ejercicio21Page]
})
export class Ejercicio21PageModule {}
