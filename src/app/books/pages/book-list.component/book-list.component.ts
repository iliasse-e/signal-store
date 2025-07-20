import { Component, inject } from '@angular/core';
import { BookStore } from '../../stores/books.store';
import { BookCardComponent } from '../../components/book-card.component/book-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'book-list',
  imports: [BookCardComponent, RouterLink],
  template: `
    <h2>📚 Liste des livres</h2>

    <button type="button" routerLink="new">Enregistrer un livre</button>

    @if (store.loading()) {
      <div class="loading">⏳ Chargement des livres...</div>
    } @else {
      @if (store.books().length === 0) {
        <p>Aucun livre disponible.</p>
      } @else {
        <ul class="book-list">
          @for (book of store.books(); track store.books()) {
            <book-card [book]="book" />
          }
        </ul>
      }
    }
  `,
  providers: [BookStore]
})
export class BookListComponent {
  readonly store = inject(BookStore);
}
