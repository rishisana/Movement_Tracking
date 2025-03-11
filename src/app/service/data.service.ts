import { Injectable, signal } from '@angular/core';
import { Athlete } from '../model/athlete';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Team } from '../model/team';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  athlete!: Athlete
  serviceUrl: string =''
 
  constructor(private http: HttpClient) { 
    this.serviceUrl = 'https://capstone-31832-default-rtdb.firebaseio.com';
  }
  userlogin : boolean = false;

  //To add an athlete to the database
  addAthlete(athlete: Athlete): Observable<Athlete> {
    return this.http.post<Athlete>(this.serviceUrl +'/athletes.json', athlete)
  }

  getAthletes(): Observable<Athlete[]>{  
    let athletes: Athlete[] = [] 
    return this.http.get<{[key:string]: Athlete}>(this.serviceUrl+'/athletes.json').pipe(map((response)=>{
      for(let key in response){
        if(response.hasOwnProperty(key)){
        athletes.push({...response[key], id: key})
        }
      }
      return athletes;
    }))
  }

  getAthleteById(id:string): Observable<Athlete>{
    return this.http.get<Athlete>(this.serviceUrl+'/athletes/'+id +'.json')
  }

  editAthlete(athlete: any, id:string | undefined): Observable<Athlete>{
   return this.http.put<Athlete>(this.serviceUrl+'/athletes/'+id +'.json', athlete)
  }

  deleteAthlete(athlete: any): Observable<Athlete>{
    return this.http.delete<Athlete>(this.serviceUrl+'/athletes/'+athlete.id +'.json')
  }
  
}
