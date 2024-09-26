import { Component, OnDestroy, OnInit } from '@angular/core';
import { GetContentService } from './services/get-content.service';
import { Subscription } from 'rxjs';
import { loadDefaultJapaneseParser } from 'budoux';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  private parserJA = loadDefaultJapaneseParser();

  translates: { [key: string]: string }
  translatesSub$: Subscription

  constructor(
    private getContentService: GetContentService
  ) { }

  ngOnInit() {
    this.translatesSub$ = this.getContentService.getContent().subscribe(
      data => {
        this.translates = JSON.parse(this.parserJA.parse(JSON.stringify(data)).join('​'))
      }
    )
  }

  ngOnDestroy() {
    this.translatesSub$.unsubscribe()
  }
}
