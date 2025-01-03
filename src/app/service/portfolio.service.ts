import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient) { }
  baseServerURL='http://localhost:3000/ContactData';

  postData(data:any){
    return this.http.post(this.baseServerURL,data);
  }
}
