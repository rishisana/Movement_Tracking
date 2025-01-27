import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtheletesComponent } from './atheletes.component';
import { IndAthleteComponent } from './ind-athlete/ind-athlete.component';


const routes: Routes = [
  { path: '', component: AtheletesComponent },
  {path: 'athlete/:id' , component: IndAthleteComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtheletesRoutingModule { }
