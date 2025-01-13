import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../model/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  // teams: Observable<Team[]> =[]
  serviceUrl: string
  constructor(private http: HttpClient) { 
    this.serviceUrl = 'http://localhost:3000/teams'
  }

  //to get the teams data from the db. json
  getTeams(): Observable<Team[]>{
    console.log("Inside the service");
    return this.http.get<Team[]>(this.serviceUrl)
  }

  addTeam(team: any):Observable<Team>{
    return this.http.post<Team>(this.serviceUrl, team)
  }

  editTeam(team: any, id: number):Observable<Team>{
    return this.http.put<Team>(this.serviceUrl+ "/"+ id, team)
  }

  deleteTeam(team: any):Observable<Team>{
    return this.http.delete<Team>(this.serviceUrl+ "/"+ team.id)
  }
  
}
