export type ReadingBook = {
  title: string;
  author: string;
  note: string;
  href?: string;
  finishedAt?: string;
};

export const currentlyReading: ReadingBook | null = {
  title: "Thinking, Fast and Slow",
  author: "Daniel Kahneman",
  note: "A look at the two systems of thought that shape judgment and decision-making.",
};

// Add finished books here. They will appear automatically on the Reading page.
export const finishedBooks: ReadingBook[] = [];
