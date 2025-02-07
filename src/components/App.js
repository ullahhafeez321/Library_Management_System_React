import { useState } from "react";
import initialBooks from "../data/data";

export default function App() {
  const [book, setBook] = useState(initialBooks);
  const [showForm, setShowForm] = useState(false);

  function handleShowForm(e) {
    e.preventDefault();
    setShowForm((showForm) => !showForm);
  }

  const style = {
    marginTop: "25px",
    color: "#fff",
    backgroundColor: "#135296",
    borderRaduis: "3px",
    display: "block",
    width: "10%",
    padding: "0.75rem",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "1rem",
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <BookList books={book} />
        <Button onClick={handleShowForm} style={style}>
          {showForm ? "Close" : "+ Add Book"}
        </Button>
        {showForm ? <Form onAddBook={setBook} /> : false}
      </div>
      <Footer />
    </>
  );
}

function Navbar() {
  return (
    <div className="navbar">
      <h1>Library Management System</h1>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2025 Library Management System</p>
    </footer>
  );
}

function BookList({ books }) {
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
        {books.map((book, i) => (
          <Book book={book} id={i + 1} key={book.id} />
        ))}
      </tbody>
    </table>
  );
}

function Book({ book, id }) {
  return (
    <tr>
      <td>{id}</td>
      <td>{book.book}</td>
      <td>{book.genere}</td>
      <td>{book.author}</td>
      <td>{book.status}</td>
      <td>
        <Button>Borrow</Button>
        <Button>Delete</Button>
      </td>
    </tr>
  );
}

function Form({ onAddBook }) {
  const [bookName, setBookName] = useState("");
  const [author, setAuthor] = useState("");
  const [genere, setGenere] = useState("");

  function handleAddBook(e) {
    e.preventDefault();

    const id = crypto.randomUUID();
    const newBook = { id, book: bookName, author, genere, status: "Available" };

    onAddBook((book) => [...book, newBook]);

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

function Button({ children, onClick, style }) {
  return (
    <button style={style} onClick={onClick}>
      {children}
    </button>
  );
}
