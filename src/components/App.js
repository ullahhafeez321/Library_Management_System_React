import { useState } from "react";
import initialBooks from "../data/data";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Button from "./Button";
import BookList from "./BookList";
import Form from "./Form";

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
