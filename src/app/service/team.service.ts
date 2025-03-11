import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of, switchMap, tap } from 'rxjs';
import { Team } from '../model/team';
import { Athlete } from '../model/athlete';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  serviceUrl: string
  constructor(private http: HttpClient) { 
    this.serviceUrl = 'https://capstone-31832-default-rtdb.firebaseio.com'
  }

  getTeams(): Observable<Team[]>{
    let teams :Team[] = []
   return this.http.get<{[key: string]:Team}>(this.serviceUrl+ '/teams.json').pipe(map((response)=>{
    for(let key in response){
      if(response.hasOwnProperty(key)){
        teams.push({...response[key], id: key})
      }
    }
  return teams;
    }))

  }

  addTeam(team: any):Observable<Team>{
    return this.http.post<Team>(this.serviceUrl+'/teams.json' , team)
  }

  addNewAthleteToTeam(newAthlete: Athlete): Observable<Team | null>{
   return this.getTeams().pipe(map((teams: Team[])=>{
     let teamToUpdate = teams.find(team => team.team_name == newAthlete.team);
     if(teamToUpdate){
      teamToUpdate.athletes.push(newAthlete);
      return this.editTeam(teamToUpdate, teamToUpdate.id);
     }
      return of(null);
      }),
      switchMap((result)=>{
        if(result) return result
        return of(null);
      })
    )
  }

  editTeam(team: any, id: string | undefined):Observable<Team>{
    return this.http.put<Team>(this.serviceUrl+ "/teams/"+ id + ".json", team);
  }

  deleteTeam(team: any):Observable<Team>{
    return this.http.delete<Team>(this.serviceUrl+ "/teams/"+  team.id +".json")
  }
  
}
