import { Routes } from "@angular/router";
import { BookListComponent } from "./pages/book-list.component/book-list.component";
import { BookRegistrationComponent } from "./pages/book-registration.component/book-registration.component";

export const booksRoutes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'new',
    component: BookRegistrationComponent
  }
]
