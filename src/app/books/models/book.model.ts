export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  summary: string;
  coverUrl?: string;
  publishedYear: number;
  available: boolean;
}
