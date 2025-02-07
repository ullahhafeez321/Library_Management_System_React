import { useState } from "react";
import initialBooks from "../data/data";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Button from "./Button";

export default function App() {
  const [book, setBook] = useState(initialBooks);
  const [showForm, setShowForm] = useState(false);

  function handleShowForm() {
    setShowForm((showForm) => !showForm);
  }

  function handleDeleteBook(id) {
    const alerts = window.confirm("Are you sure want to Delete the Book?");
    if (!alerts) return;
    setBook((book) => book.filter((book) => (book.id === id ? null : book)));
  }

  function handleBorrowBook(id) {
    setBook((books) =>
      books.map((book) =>
        book.id === id
          ? {
              ...book,
              status: book.status === "Available" ? "Borrowed" : "Available",
            }
          : book
      )
    );
  }

  return (
    <>
      <Navbar />
      <main className="container">
        <BookList
          books={book}
          onDeleteBook={handleDeleteBook}
          onBorrow={handleBorrowBook}
        />
        <Button className="show-btn" onClick={handleShowForm}>
          {showForm ? "Close" : "+ Add Book"}
        </Button>
        {showForm ? (
          <Form onAddBook={setBook} setShowForm={setShowForm} />
        ) : (
          false
        )}
      </main>
      <Footer />
    </>
  );
}

function BookList({ books, onDeleteBook, onBorrow }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>S.no</th>
          <th>Book</th>
          <th>Author</th>
          <th>Genere</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <>
          {!books.length ? (
            <tr>
              <td
                colSpan={6}
                style={{ textAlign: "center", margin: "20px 0", color: "#555" }}
              >
                No books available. <strong>Add books</strong> to the list.
              </td>
            </tr>
          ) : (
            books.map((book, i) => (
              <Book
                book={book}
                id={i + 1}
                key={book.id}
                onDeleteBook={onDeleteBook}
                onBorrow={onBorrow}
              />
            ))
          )}
        </>
      </tbody>
    </table>
  );
}

function Book({ book, id, onDeleteBook, onBorrow }) {
  return (
    <tr>
      <td>{id}</td>
      <td>{book.book}</td>
      <td>{book.author}</td>
      <td>{book.genere}</td>
      <td>{book.status}</td>
      <td>
        <Button className="table-btn" onClick={() => onBorrow(book.id)}>
          {book.status === "Available" ? "Borrow" : "Return"}
        </Button>
        <Button className="table-btn" onClick={() => onDeleteBook(book.id)}>
          Delete
        </Button>
      </td>
    </tr>
  );
}

function Form({ onAddBook, setShowForm }) {
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
