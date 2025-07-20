export interface Borrowing {
  id: number;
  bookId: number;
  memberId: number;
  borrowDate: string;
  returnDate?: string;
  returned: boolean;
}
