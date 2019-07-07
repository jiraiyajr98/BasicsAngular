import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  constructor(private http:HttpClient) { }

  getDatas(){
    return this.http.get('https://api.github.com/users?since=135');
  }

}
