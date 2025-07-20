export interface Suggestion {
  id: number;
  title: string;
  suggestedBy: number; // memberId
  reason?: string;
  votes: number;
  dateSuggested: string;
  accepted: boolean;
}
