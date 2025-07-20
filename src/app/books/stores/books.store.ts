import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from "@ngrx/signals";
import { Book } from "../models/book.model";
import { computed, inject } from "@angular/core";
import { BookService } from "../services/book.service";

type BooksState = {
  books: Book[];
  loading: boolean;
  selectedBookId?: number;
}

export const initialState: BooksState = {
  books: [],
  loading: false,
  selectedBookId: undefined
}

export const BookStore = signalStore(
  withState(initialState),
  withComputed(({books}) => ({
    availableBooks: computed(() => books().filter(book => book.available))
  })),
  withMethods((store, booksService = inject(BookService)) => ({
    async loadBooks(): Promise<void> {
      patchState(store, {loading: true});

      try {
        const books = await booksService.getBooks();
        patchState(store, {loading: false, books: books})
      } catch (error) {
        patchState(store, { loading: false });
        console.error('BookStore loading error:', error);
      } finally {
        patchState(store, { loading: false });
      }
    }
  })),
  withHooks({
    onInit(store) {
        store.loadBooks();
    },
  })
)
