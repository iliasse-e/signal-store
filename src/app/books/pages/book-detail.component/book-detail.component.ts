import { Component, inject, input, OnInit } from '@angular/core';
import { BookStore } from '../../stores/books.store';

@Component({
  selector: 'book-detail',
  imports: [],
  template: `
    <div class="book-card">
      <div class="book-card__header">
        <h3>{{ store.selectedBook()?.title }}</h3>
      </div>
      <p><strong>Auteur :</strong> {{ store.selectedBook()?.author }}</p>
      <p><strong>Genre :</strong> {{ store.selectedBook()?.genre }}</p>
      <p><strong>Résumé :</strong> {{ store.selectedBook()?.summary }}</p>
      <p><strong>Année de publication :</strong> {{ store.selectedBook()?.publishedYear }}</p>
      <p>
        <strong>Disponibilité :</strong>
        @if (store.selectedBook()) {
          ✅ Disponible
        } @else {
          ❌ Indisponible
        }
      </p>
      <button class="delete-btn" title="Supprimer">🗑️</button>
    </div>
  `,
  styleUrl: './book-detail.component.css',
  providers: [BookStore]
})
export class BookDetailComponent implements OnInit {
  readonly store = inject(BookStore);
  id = input.required();

  ngOnInit(): void {
    this.store.selectBook(this.id() as string);
  }
}
