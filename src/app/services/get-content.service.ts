import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class GetContentService {

  constructor(
    private http: HttpClient
  ){}

  getContent(): Observable<any> {
    return this.http.get('./assets/json/ja.json')
  }
}