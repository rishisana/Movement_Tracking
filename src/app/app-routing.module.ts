import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamComponent } from './component/team/team.component';
import { LoginComponent } from './component/login/login.component';
import { InputDataComponent } from './component/input-data/input-data.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { AtheletesComponent } from './atheletes/atheletes.component';
import { MovementsComponent } from './movements/movements.component';
import { IndAthleteComponent } from './atheletes/ind-athlete/ind-athlete.component';


const routes: Routes = [
  
  {path: 'team', component: TeamComponent},
  {path:'athletes', component: AtheletesComponent},
  {path: 'athletes/:id', component: IndAthleteComponent},
  {path: 'login', component: LoginComponent},
  {path: 'input', component: InputDataComponent},
  {path: 'movement', component: MovementsComponent},
  {path: ' ', redirectTo:'/login', pathMatch:'full'},
  {path: '**', component: NotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
