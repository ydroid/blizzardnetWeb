import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from './home.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {
  subs = new SubSink();
  total: number;
  constructor(private guildService: HomeService) { }

  ngOnInit(): void {
    this.subs.sink = this.guildService.getGuildDataAsObservable().subscribe(data => {
      this.total = this.guildService.getTotal();
    });
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
