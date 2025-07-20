import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Footer } from './core/components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Footer],
  template: `
    <nav style="display: flex; justify-content: space-between">
        <li><a [routerLink]="['/books']">Livres</a></li>
        <li><a [routerLink]="['/members']">Membres</a></li>
        <li><a [routerLink]="['/borrowings']">Emprunts</a></li>
        <li><a [routerLink]="['/suggestions']">Suggestions</a></li>
    </nav>

    <main>
      <router-outlet></router-outlet>
    </main>

    <footer></footer>
  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Koutoubia');
}
