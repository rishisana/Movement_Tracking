import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Movement } from '../model/movement';

@Injectable({
  providedIn: 'root'
})
export class MovementService {

  serviceUrl : string
  constructor(private http: HttpClient) {
    this.serviceUrl = 'https://capstone-31832-default-rtdb.firebaseio.com/';
   }
   addMovement(movement: any): Observable<Movement>{
    return this.http.post<Movement>(this.serviceUrl+'/movements.json', movement)
   }
   getMovements(): Observable<Movement[]>{    
    return this.http.get<Movement[]>(this.serviceUrl + '/movements.json').pipe(map((data)=>{
      let movements = []
      for(let key in data){
        if(data.hasOwnProperty(key)){
          movements.push({...data[key], id: key})
        }
      }
      return movements;
    }))
   }

   updateMovement(movement: any, id: number): Observable<Movement>{
    return this.http.put<Movement>(this.serviceUrl+ 'movements/'+"/"+id+'.json',movement)
   }

   deleteMovement(movement: any){
    return this.http.delete<Movement>(this.serviceUrl+'movements/'+movement.id + '.json')
   }
}
