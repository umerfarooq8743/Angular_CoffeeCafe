
import { Injectable } from '@angular/core';
import { Coffee } from './coffee';
import{Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  constructor(private http:HttpClient) { }
  getAll():Observable<Coffee>{
    return this.http.get<Coffee>("http://localhost:3000/Coffee");
  }
  create(payload:Coffee):Observable<Coffee>{
    return this.http.post<Coffee>("http://localhost:3000/Coffee",payload);
  }
  getById(id:number):Observable<Coffee>{
    return this.http.get<Coffee>(`http://localhost:3000/Coffee/${id}`);
  }
  update(payload:Coffee):Observable<Coffee>{
    return this.http.put<Coffee>(`http://localhost:3000/Coffee/${payload.id}`,payload);
  }
  delete(id:number){
    return this.http.delete(`http://localhost:3000/Coffee/${id}`);
  }
}
