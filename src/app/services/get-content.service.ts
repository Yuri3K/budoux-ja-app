import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { loadDefaultJapaneseParser } from "budoux";
import { concatMap, Observable, tap } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class GetContentService {
  private parserJA = loadDefaultJapaneseParser();

  constructor(
    private http: HttpClient
  ){}

  getContent(): Observable<any> {
    return this.http.get('./assets/json/ja.json')
    .pipe(
      tap(data => JSON.parse(this.parserJA.parse(JSON.stringify(data)).join('​')))
    )
  }
}