import { Injectable, signal } from '@angular/core';
import { Athlete } from './model/athlete';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  athlete!: Athlete
  serviceUrl: string =''
 
  constructor(private http: HttpClient) { 
    this.serviceUrl = 'http://localhost:3000/athletes';
  }
  userlogin : boolean = false;

  //To add an athlete to the database
  addAthlete(athlete: any): Observable<Athlete>{
    console.log("Entered into the add athlete");
    console.log("Value of the athlete name "+ athlete.name );
    console.log("The type of athlete is " + athlete);
    
    return this.http.post<Athlete>(this.serviceUrl, athlete)
  }

  getAthletes(): Observable<Athlete[]>{    
    return this.http.get<Athlete[]>(this.serviceUrl)
  }

  getAthleteById(id:number): Observable<Athlete>{
    return this.http.get<Athlete>(this.serviceUrl+'/'+id)
  }

  editAthlete(athlete: any, id:number): Observable<Athlete>{
   return this.http.put<Athlete>(this.serviceUrl+"/"+id, athlete)
  }

  deleteAthlete(athlete: any): Observable<Athlete>{
    return this.http.delete<Athlete>(this.serviceUrl+'/'+athlete.id)
  }
  
}
