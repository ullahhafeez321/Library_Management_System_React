import { useState } from "react";
import Button from "./Button";

export default function Form({ onAddBook, setShowForm }) {
  const [bookName, setBookName] = useState("");
  const [author, setAuthor] = useState("");
  const [genere, setGenere] = useState("");

  function handleAddBook(e) {
    e.preventDefault();

    if (!bookName || !author || !genere) return;

    const id = crypto.randomUUID();
    const newBook = { id, book: bookName, author, genere, status: "Available" };

    onAddBook((book) => [...book, newBook]);

    setShowForm(false);
    setAuthor("");
    setBookName("");
    setGenere("");
  }

  return (
    <form className="form">
      <h2>Add Book</h2>
      <div className="form-group">
        <label htmlFor="book">Book:</label>
        <input
          id="book"
          value={bookName}
          type="text"
          placeholder="Enter book name..."
          onChange={(e) => setBookName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="author">Author Name:</label>
        <input
          id="author"
          value={author}
          type="text"
          placeholder="Enter author name..."
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="genere">Genere:</label>
        <input
          id="genere"
          value={genere}
          type="text"
          placeholder="Enter genere..."
          onChange={(e) => setGenere(e.target.value)}
        />
      </div>
      <div className="form-group">
        <Button onClick={(e) => handleAddBook(e)}>Add</Button>
      </div>
    </form>
  );
}
