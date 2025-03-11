import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamComponent } from './component/team/team.component';
import { LoginComponent } from './component/login/login.component';
import { InputDataComponent } from './component/input-data/input-data.component';
import { NotfoundComponent } from './component/notfound/notfound.component';


const routes: Routes = [
  
  {path: 'team', component: TeamComponent},
  {path: 'movement', component: MovementComponent},
  {path: 'login', component: LoginComponent},
  {path: 'input', component: InputDataComponent},
  
  { path: 'atheletes', loadChildren: () => import('./atheletes/atheletes.module').then(m => m.AtheletesModule) },
  
  { path: 'movements', loadChildren: () => import('./movements/movements.module').then(m => m.MovementsModule) },
  {path: ' ', redirectTo:'/login', pathMatch:'full'},
  {path: '**', component: NotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
