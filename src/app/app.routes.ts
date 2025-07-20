import { Routes } from '@angular/router';
import { booksRoutes } from './books/books.routes';
import { membersRoutes } from './members/members.routes';
import { suggestionsRoutes } from './suggestions/suggestions.routes';
import { borrowingsRoutes } from './borrowings/borrowings.routes';
import { Errorpage } from './shared/pages/errorpage/errorpage';

export const routes: Routes = [
  { path: '',
    redirectTo: 'books',
    pathMatch: 'full'
  },
  {
    path: 'books',
    children: booksRoutes
  },
  {
    path: 'members',
    children: membersRoutes
  },
  {
    path: 'borrowings',
    children: borrowingsRoutes
  },
  {
    path: 'suggestions',
    children: suggestionsRoutes
  },
  {
    path: "**",
    component: Errorpage
  }
];
