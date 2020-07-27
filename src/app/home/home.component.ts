import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { HomeService } from './home.service';
import { SubSink } from 'subsink';
import { Guild } from 'src/models/guild';
import { MatTableDataSource } from '@angular/material/table';
import { Player } from 'src/models/player';
import { Leader } from 'src/models/leader';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  subs = new SubSink();
  guild: Guild;
  leader: Leader;
  perCents;
  displayedColumns: string[] = ['online','name','level', 'class', 'race','achievementpoints','profeciones'];
  dataSource: MatTableDataSource<Player>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private guildService: HomeService, private router: Router) {}

  ngOnInit(): void {
    this.subs.sink = this.guildService.getGuildDataAsObservable().subscribe(data => {
      if(data !== undefined) {
        this.guild = data;
        this.perCents = this.guildService.getMockPercents();
        this.dataSource = new MatTableDataSource<Player>(this.guild.roster);
        this.leader = this.guild.leader;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    });
  }
  navigateTo(name: string) {
    this.router.navigate(['/player/' + name]);
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
