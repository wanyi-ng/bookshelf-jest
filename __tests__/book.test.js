const Book = require("../js/Book");

describe("Book class", () => {
  let book;

  beforeEach(() => {
    book = new Book(
      "Frankenstein",
      ["Shelley, Mary"],
      ["Gothic fiction, Science fiction, Horror fiction, Thriller"],
      "en"
    );
  });

  describe("constructor", () => {
    it("should create a new Book instance with a title, author, subject, and language", () => {
      expect(book).toHaveProperty("title", "Frankenstein");
      expect(book).toHaveProperty("author", ["Shelley, Mary"]);
      expect(book).toHaveProperty("subject", [
        "Gothic fiction, Science fiction, Horror fiction, Thriller",
      ]);
      expect(book).toHaveProperty("language", "en");
    });
  });
  describe("render method", () => {
    it("should return an HTML element with the book information", () => {
      const bookElement = book.render();
      expect(bookElement instanceof HTMLElement).toBe(true);
      expect(bookElement.tagName).toBe("LI");
    });
  });
});
