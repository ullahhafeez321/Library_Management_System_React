import Button from "./Button";

export default function Book({ book, id, onDeleteBook, onBorrow }) {
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
