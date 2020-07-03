import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  data = {
    name: 'BooksCu',
    description: `Peluquería, Barbería, restaurantes, Uñas, Cuidados Piel, Cejas&Pestañas`,
    image: '',
  };
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle(this.data.name);
    this.meta.addTags([
      { name: 'twitter:card', content: 'summary' },
      { name: 'og:url', content: '/' },
      { name: 'og:title', content: this.data.name },
      { name: 'og:description', content: this.data.description },
      { name: 'og:image', content: this.data.image },
    ]);
  }
}
