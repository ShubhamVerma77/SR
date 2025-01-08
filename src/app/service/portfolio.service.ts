import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient) { }
  baseServerURL='https://portolio-98377-default-rtdb.firebaseio.com/Contact.json';

  postData(data:any):Observable<any> {
    return this.http.post(this.baseServerURL,data);
  }
  getUser():Observable<any> {
    return this.http.get(this.baseServerURL);
  }
}
