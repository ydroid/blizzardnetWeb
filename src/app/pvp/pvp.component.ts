import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-pvp',
  templateUrl: './pvp.component.html',
  styleUrls: ['./pvp.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PvpComponent implements OnInit {
  teams2: MatTableDataSource<string>;
  constructor() { }

  ngOnInit(): void {
    this.teams2 = new MatTableDataSource<string>(["primero", "segundo"]);
  }

}
