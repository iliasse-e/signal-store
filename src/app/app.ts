import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from './core/components/header/header';
import { Footer } from './core/components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Header, Footer],
  template: `
    <header></header>
    <ul>
      <li><a [routerLink]="['/books']">Livres</a></li>
      <li><a [routerLink]="['/members']">Membres</a></li>
      <li><a [routerLink]="['/borrowings']">Emprunts</a></li>
      <li><a [routerLink]="['/suggestions']">Suggestions</a></li>
    </ul>
    <router-outlet></router-outlet>
    <footer></footer>
  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Sultanat des livres');
}
