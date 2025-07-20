import { Borrowing } from "../../borrowings/model/borrowing.model";

export interface Member {
  id: number;
  fullName: string;
  email: string;
  joinedDate: string;
  isActive: boolean;
  borrowHistory: Borrowing[];
}
