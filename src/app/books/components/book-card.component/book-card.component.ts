import { Component, input } from '@angular/core';
import { Book } from '../../models/book.model';

@Component({
  selector: 'book-card',
  imports: [],
  template: `
  <li class="book-card">
    <h3>{{ book().title }}</h3>
    <p><strong>Auteur :</strong> {{ book().author }}</p>
    <p><strong>Genre :</strong> {{ book().genre }}</p>
    <p><strong>Résumé :</strong> {{ book().summary }}</p>
    <p><strong>Année de publication :</strong> {{ book().publishedYear }}</p>
    <p>
      <strong>Disponibilité :</strong>
      @if (book().available) {
        ✅ Disponible
      } @else {
        ❌ Indisponible
      }
    </p>
  </li>
  `,
  styles: [`
    .book-list {
      list-style: none;
      padding: 0;
    }

    .book-card {
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 1rem;
      margin-bottom: 1rem;
      max-width: 500px;
    }
`]
})
export class BookCardComponent {
  book = input.required<Book>();
}
