import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movement } from '../model/movement';

@Injectable({
  providedIn: 'root'
})
export class MovementService {

  serviceUrl : string
  constructor(private http: HttpClient) {
    this.serviceUrl = "http://localhost:3000/movements"
   }
   addMovement(movement: any): Observable<Movement>{
    return this.http.post<Movement>(this.serviceUrl, movement)
   }
   getMovements(): Observable<Movement[]>{    
    return this.http.get<Movement[]>(this.serviceUrl)
     
   }

   updateMovement(movement: any, id: number): Observable<Movement>{
    return this.http.put<Movement>(this.serviceUrl+"/"+id,movement)
   }

   deleteMovement(movement: any){
    return this.http.delete<Movement>(this.serviceUrl+'/'+movement.id)
   }
}
