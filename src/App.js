const initialBooks = [
  {
    id: 1,
    book: "Alif",
    genere: "Novel",
    author: "Hafeez",
    status: "Available",
  },
  {
    id: 2,
    book: "Men's Searching For Meaning",
    genere: "Story",
    author: "Hamza Assa",
    status: "Borrowed",
  },
];

export default function App() {
  return (
    <div>
      <Navbar />

      <BookTable />
    </div>
  );
}

function Navbar() {
  return (
    <div className="navbar">
      <h1>Library Management System</h1>
    </div>
  );
}

function BookTable({ book }) {
  return (
    <div className="container">
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
          {initialBooks.map((book) => (
            <Book book={book} key={book.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Book({ book }) {
  return (
    <>
      <tr>
        <td>{book.id}</td>
        <td>{book.book}</td>
        <td>{book.genere}</td>
        <td>{book.author}</td>
        <td>{book.status}</td>
        <td>
          <button>Edit</button>
          <button>Delete</button>
        </td>
      </tr>
    </>
  );
}
