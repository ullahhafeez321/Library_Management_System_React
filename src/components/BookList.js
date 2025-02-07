import Book from "./Book";

export default function BookList({ books, onDeleteBook, onBorrow }) {
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
