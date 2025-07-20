import { Component, inject } from '@angular/core';
import { BookStore } from '../../stores/books.store';
import { BookCardComponent } from '../../components/book-card.component/book-card.component';
import { Router, RouterLink } from '@angular/router';

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
            <book-card [book]="book" (actionEvent)="selectBook(book.id)" (deleteEvent)="deleteBook(book.id)"/>
          }
        </ul>
      }
    }
  `,
  providers: [BookStore]
})
export class BookListComponent {
  readonly store = inject(BookStore);
  readonly router = inject(Router);

  selectBook(id: string) {
    this.router.navigate(['books/detail/' + id]);
  }

  deleteBook(id: string) {
    this.store.deleteBook(id);
  }
}
