export type ReadingBook = {
  title: string;
  author: string;
  note: string;
  coverUrl?: string;
  href?: string;
  finishedAt?: string;
};

export const currentlyReading: ReadingBook | null = {
  title: "Thinking, Fast and Slow",
  author: "Daniel Kahneman",
  note: "A look at the two systems of thought that shape judgment and decision-making.",
  coverUrl: "https://covers.openlibrary.org/b/isbn/9780374533557-L.jpg",
};

// Add finished books here. They will appear automatically on the Reading page.
export const finishedBooks: ReadingBook[] = [];
