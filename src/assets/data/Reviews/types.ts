export interface Review {
  author: string;
  rating: number;
  text: string;
  date: string;
  avatarInitial?: string;
}

export interface ReviewsSectionData {
  caption: string;
  title: string;
  reviews: Review[];
}
