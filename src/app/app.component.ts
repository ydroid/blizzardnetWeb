import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  data = {
    name: 'Blizzard Net Guild',
    description: `Hermandad enfocada en PVP, PVE, eventos semanales, pasarla bien y crear una comunidad en este universo que nos encanta`,
    image: '',
  };
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
  }
}
