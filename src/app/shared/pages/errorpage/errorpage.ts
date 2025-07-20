import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-errorpage',
  imports: [RouterLink],
  template: `
  <h1>404 - Page non trouvée</h1>
  <p>La Koutoubia ne connaît pas ce manuscrit.</p>
  <button routerLink="/">Retour à l’accueil</button>
`,
  styleUrl: './errorpage.css'
})
export class Errorpage {

}
