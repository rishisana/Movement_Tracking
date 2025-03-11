import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';
import { Input } from '../model/input';

@Injectable({
  providedIn: 'root'
})
export class PerformanceService {

  athletePerformance: Partial<{ date: any; name: any; movement: any; assessment: any; }>[] =[]
  serviceUrl : string
  constructor(private http: HttpClient) { 
    this.serviceUrl = "https://capstone-31832-default-rtdb.firebaseio.com/"
  }

  addPerformanceDetails(input: any): Observable<Input>{
    return this.http.post<Input>(this.serviceUrl+"performance.json" , input);
  }

  getPerformanceDetails(): Observable<Input[]>{
    let input: Input[] = []
    return this.http.get<{[key:string]: Input}>(this.serviceUrl+"performance.json").pipe(map((data)=>{
      
      for(let key in data){
        if(data.hasOwnProperty(key)){
          input.push({...data[key], id:key})
        }
      }
      return input;
     })
     );
  }
  
  deletePerformanceDetails(input: any): Observable<Input>{
    return this.http.delete<Input>(this.serviceUrl+ "performance/"+ input.id + ".json");
  }
 
}
