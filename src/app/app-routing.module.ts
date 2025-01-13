import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AthleteComponent } from './component/athlete/athlete.component';
import { TeamComponent } from './component/team/team.component';
import { MovementComponent } from './component/movement/movement.component';
import { LoginComponent } from './component/login/login.component';
import { MainComponent } from './component/main/main.component';
import { InputDataComponent } from './component/input-data/input-data.component';
import { IndAthleteComponent } from './component/ind-athlete/ind-athlete.component';

const routes: Routes = [
  {path:'athlete', component: AthleteComponent},
  {path: 'team', component: TeamComponent},
  {path: 'movement', component: MovementComponent},
  // {path: 'signup', component: MainComponent},
  {path: 'login', component: LoginComponent},
  {path: 'input', component: InputDataComponent},
  {path: 'athlete/:id' , component: IndAthleteComponent},
  {path: '**', redirectTo:'/login'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
