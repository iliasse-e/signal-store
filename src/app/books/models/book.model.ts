export interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  summary: string;
  coverUrl?: string;
  publishedYear: number;
  available: boolean;
}
