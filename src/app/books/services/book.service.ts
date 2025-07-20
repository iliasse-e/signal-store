import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({ providedIn: 'root' })
export class BookService {
  private apiUrl = 'http://localhost:3000/books';

  async getBooks(): Promise<Book[]> {
    const response = await fetch(this.apiUrl);
    if (!response.ok) throw new Error('Erreur réseau');
    return response.json();
  }

  async getBook(id: number): Promise<Book> {
    const response = await fetch(`${this.apiUrl}/${id}`);
    if (!response.ok) throw new Error('Livre non trouvé');
    return response.json();
  }

  async addBook(book: Book): Promise<Book> {
    const response = await fetch(this.apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book)
    });
    return response.json();
  }

  async updateBook(book: Book): Promise<Book> {
    const response = await fetch(`${this.apiUrl}/${book.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book)
    });
    return response.json();
  }

  async deleteBook(id: number): Promise<void> {
    const response = await fetch(`${this.apiUrl}/${id}`, { method: 'DELETE' });
    if (!response.ok) throw new Error('Échec de la suppression');
  }
}
