import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovementsRoutingModule } from './movements-routing.module';
import { MovementsComponent } from './movements.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MovementsComponent,
  ],
  imports: [
    CommonModule,
    MovementsRoutingModule,
    ReactiveFormsModule
  ]
})
export class MovementsModule { }
