import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from './home.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  subs = new SubSink();
  total: number;
  perCents;
  constructor(private guildService: HomeService) {}

  ngOnInit(): void {
    this.guildService.getGuildDataAsObservable().subscribe(data => {

    });

    const mockData = this.guildService.getGuildataMock();
    this.total = mockData.roster.length;
    this.perCents = this.guildService.getMockPercents();
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
