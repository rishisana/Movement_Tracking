import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { MainComponent } from './component/main/main.component';
import { LoginComponent } from './component/login/login.component';
import { AthleteComponent } from './component/athlete/athlete.component';
import { TeamComponent } from './component/team/team.component';
import { MovementComponent } from './component/movement/movement.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule}  from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { InputDataComponent } from './component/input-data/input-data.component';
import { TeamService } from './service/team.service';
import { MovementService } from './service/movement.service';
import { IndAthleteComponent } from './component/ind-athlete/ind-athlete.component';
import { PerformanceService } from './service/performance.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    LoginComponent,
    AthleteComponent,
    TeamComponent,
    MovementComponent,
    InputDataComponent,
    IndAthleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AgGridModule
  ],
  providers: [DataService, TeamService, MovementService, PerformanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
