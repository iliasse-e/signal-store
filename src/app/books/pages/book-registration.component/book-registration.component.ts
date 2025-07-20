import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Book } from '../../models/book.model';
import { BookStore } from '../../stores/books.store';

export interface FormBook {
  title: FormControl<string>;
  author: FormControl<string>;
  genre: FormControl<string>;
  summary: FormControl<string>;
  publishedYear: FormControl<number>;
}

export interface RawFormBook extends Omit<Book, 'id' | 'available'> {}


@Component({
  selector: 'book-registration',
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="bookForm" (ngSubmit)="submit()">
      <label for="name">Titre : </label><input id="name" type="text" formControlName="title">
      <label for="author">Auteur : </label><input id="author" type="text" formControlName="author">
      <label for="genre">Genre : </label><input id="genre" type="text" formControlName="genre">
      <label for="summary">Résumer : </label><input id="summary" type="text" formControlName="summary">
      <label for="publishedYear">Année de publication : </label><input id="publishedYear" type="number" formControlName="publishedYear">

      <button type="button" [type]="submit" [disabled]="bookForm.invalid">Enregistrer</button>
    </form>
  `,
  providers: [BookStore]
})
export class BookRegistrationComponent {
  readonly store = inject(BookStore);

  bookForm = new FormGroup<FormBook>({
    title: new FormControl('', {validators: Validators.required, nonNullable: true}),
    author: new FormControl('', {validators: Validators.required, nonNullable: true}),
    genre: new FormControl('', {validators: Validators.required, nonNullable: true}),
    summary: new FormControl('', {validators: Validators.required, nonNullable: true}),
    publishedYear: new FormControl(2000, {validators: Validators.required, nonNullable: true}),
  });

  submit(): void {
    const book: Book = {
      ...this.bookForm.value as RawFormBook,
      id: Date.now().toString(),
      available: true
    };
    this.store.addBook(book);
  };

}
