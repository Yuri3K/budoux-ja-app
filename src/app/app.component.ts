import { Component, OnDestroy, OnInit } from '@angular/core';
import { GetContentService } from './services/get-content.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {

  translates: { [key: string]: string }
  translatesSub$: Subscription

  constructor(
    private getContentService: GetContentService
  ) { }

  ngOnInit() {
    this.translatesSub$ = this.getContentService.getContent().subscribe(
      data => this.translates = data
    )
  }

  ngOnDestroy() {
    this.translatesSub$.unsubscribe()
  }
}
