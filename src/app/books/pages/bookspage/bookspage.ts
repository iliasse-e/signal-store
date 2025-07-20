import { Component, inject } from '@angular/core';
import { BookStore } from '../../stores/books.store';

@Component({
  selector: 'app-bookspage',
  imports: [],
  template: `
    <h2>📚 Liste des livres</h2>

    @if (store.loading()) {
      <div class="loading">⏳ Chargement des livres...</div>
    } @else {
      @if (store.books().length === 0) {
        <p>Aucun livre disponible.</p>
      } @else {
        <ul class="book-list">
          @for (book of store.books(); track store.books()) {
            <li class="book-card">
              <img
                [src]="book.coverUrl"
                alt="{{ book.title }}"
                width="120"
                height="auto"
              />
              <h3>{{ book.title }}</h3>
              <p><strong>Auteur :</strong> {{ book.author }}</p>
              <p><strong>Genre :</strong> {{ book.genre }}</p>
              <p><strong>Résumé :</strong> {{ book.summary }}</p>
              <p><strong>Année de publication :</strong> {{ book.publishedYear }}</p>
              <p>
                <strong>Disponibilité :</strong>
                @if (book.available) {
                  ✅ Disponible
                } @else {
                  ❌ Indisponible
                }
              </p>
            </li>
          }
        </ul>
      }
    }
  `,
  styleUrl: './bookspage.css',
  providers: [BookStore]
})
export class Bookspage {
  readonly store = inject(BookStore);

}
