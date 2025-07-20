import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from "@ngrx/signals";
import { Book } from "../models/book.model";
import { computed, inject } from "@angular/core";
import { BookService } from "../services/book.service";

type BooksState = {
  books: Book[];
  loading: boolean;
  selectedBookId: string | null;
}

export const initialState: BooksState = {
  books: [],
  loading: false,
  selectedBookId: null
}

export const BookStore = signalStore(
  withState(initialState),

  withComputed(({books, selectedBookId}) => ({
    availableBooks: computed(() => books().filter(book => book.available)),
    selectedBook: computed(() => books().find(book => book.id == selectedBookId()))
  })),

  withMethods((store, booksService = inject(BookService)) => ({

    async loadBooks(): Promise<void> {
      patchState(store, {loading: true});

      try {
        const books = await booksService.getBooks();
        patchState(store, {loading: false, books: books});
      } catch (error) {
        patchState(store, { loading: false });
        console.error('BookStore loading error:', error);
      } finally {
        patchState(store, { loading: false });
      }
    },

    async addBook(book: Book): Promise<void> {
      patchState(store, {loading: true});

      try {
        await booksService.addBook(book);
        const books = await booksService.getBooks();
        patchState(store, {loading: false, books: books});
      } catch (error) {
        patchState(store, { loading: false });
        console.error('BookStore saving error:', error);
      } finally {
        patchState(store, { loading: false });
      }
    },

    async deleteBook(id: string): Promise<void> {
      patchState(store, {loading: true});

      try {
        await booksService.deleteBook(Number(id));
        const books = await booksService.getBooks();
        patchState(store, {loading: false, books: books});
      } catch (error) {
        patchState(store, { loading: false });
        console.error('BookStore deleting error:', error);
      } finally {
        patchState(store, { loading: false });
      }
    },

    selectBook(id: string): void {
      patchState(store, {selectedBookId: id});
    }
  })),

  withHooks({
    onInit(store) {
        store.loadBooks();
    },
  })
)
