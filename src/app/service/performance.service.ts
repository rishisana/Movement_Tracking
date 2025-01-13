import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Input } from '../model/input';

@Injectable({
  providedIn: 'root'
})
export class PerformanceService {

  athletePerformance: Partial<{ date: any; name: any; movement: any; assessment: any; }>[] =[]
  serviceUrl : string
  constructor(private http: HttpClient) { 
    this.serviceUrl = "http://localhost:3000/inputs"
  }

  addPerformanceDetails(input: any): Observable<Input>{
    console.log("Entered into the performance service ");
    console.log("The value of the input is " + input);
    
    return this.http.post<Input>(this.serviceUrl, input);
  }

  getPerformanceDetails(): Observable<Input[]>{
    return this.http.get<Input[]>(this.serviceUrl);
  }
  
  deletePerformanceDetails(input: any): Observable<Input>{
    return this.http.delete<Input>(this.serviceUrl+ "/"+ input.id);
  }
 
}
