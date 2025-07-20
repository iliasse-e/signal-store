import { Component, input, output } from '@angular/core';
import { Book } from '../../models/book.model';

@Component({
  selector: 'book-card',
  imports: [],
  template: `
  <li class="book-card">
    <div class="book-card__header">
      <h3>{{ book().title }}</h3>
      <button class="delete-btn" title="Supprimer" (click)="deleteEvent.emit()">🗑️</button>
    </div>
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

    <button class="detail-btn" title="detail" (click)="actionEvent.emit()">Detail</button>
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

    .book-card__header {
      display: flex;
      justify-content: space-between;
    }

    .delete-btn {
      background: transparent;
      border: none;
      color: #d33;
      cursor: pointer;
      margin-left: 0.5rem;
      transition: transform 0.2s ease;
    }

    .delete-btn:hover {
      transform: scale(1.2);
      color: #a00;
    }

`]
})
export class BookCardComponent {
  book = input.required<Book>();
  actionEvent = output();
  deleteEvent = output();
}
