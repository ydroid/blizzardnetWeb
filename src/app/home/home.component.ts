import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from './home.service';
import { SubSink } from 'subsink';
import { Guild } from 'src/models/guild';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  subs = new SubSink();
  guild: Guild;
  perCents;
  constructor(private guildService: HomeService) {}

  ngOnInit(): void {
    this.guildService.getGuildDataAsObservable().subscribe(data => {
      if(data !== undefined) {
        console.log(data);
        this.guild = data;
        this.perCents = this.guildService.getMockPercents();
      }
    });
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
