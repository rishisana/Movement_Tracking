import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtheletesRoutingModule } from './atheletes-routing.module';
import { AtheletesComponent } from './atheletes.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AtheletesComponent
  ],
  imports: [
    CommonModule,
    AtheletesRoutingModule,
    ReactiveFormsModule,
  ]
})
export class AtheletesModule { }
