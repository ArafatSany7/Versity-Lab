import { useEffect, useMemo, useState } from "react";

const API_BASE_URL =
  import.meta.env.VITE_API_URL?.replace(/\/$/, "") || "http://localhost:5000";

function Book({ book, onToggle, onDelete }) {
  return (
    <li>
      <span>
        {book.title} by {book.author} -{" "}
        {book.completed ? "Completed" : "In Progress"}
      </span>{" "}
      <button onClick={() => onToggle(book.id)}>Toggle</button>{" "}
      <button onClick={() => onDelete(book.id)}>Delete</button>
    </li>
  );
}

export default function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const totalCompleted = useMemo(
    () => books.filter((book) => book.completed).length,
    [books],
  );

  useEffect(() => {
    let isMounted = true;

    async function loadBooks() {
      try {
        const response = await fetch(`${API_BASE_URL}/api/books`);
        if (!response.ok) {
          throw new Error("Failed to fetch books.");
        }

        const data = await response.json();
        if (isMounted) {
          setBooks(data);
          setError("");
        }
      } catch (fetchError) {
        if (isMounted) {
          setError(
            fetchError.message || "Something went wrong while fetching books.",
          );
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadBooks();

    return () => {
      isMounted = false;
    };
  }, []);

  async function addBook(event) {
    event.preventDefault();

    try {
      setError("");
      const response = await fetch(`${API_BASE_URL}/api/books`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, author }),
      });

      if (!response.ok) {
        const payload = await response.json();
        throw new Error(payload.error || "Failed to add book.");
      }

      const newBook = await response.json();
      setBooks((current) => [...current, newBook]);
      setTitle("");
      setAuthor("");
    } catch (saveError) {
      setError(saveError.message || "Failed to add book.");
    }
  }

  async function toggleBook(id) {
    try {
      setError("");
      const response = await fetch(`${API_BASE_URL}/api/books/${id}/toggle`, {
        method: "PATCH",
      });

      if (!response.ok) {
        throw new Error("Failed to update reading status.");
      }

      const updatedBook = await response.json();
      setBooks((current) =>
        current.map((book) => (book.id === id ? updatedBook : book)),
      );
    } catch (updateError) {
      setError(updateError.message || "Failed to update reading status.");
    }
  }

  async function deleteBook(id) {
    try {
      setError("");
      const response = await fetch(`${API_BASE_URL}/api/books/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete book.");
      }

      setBooks((current) => current.filter((book) => book.id !== id));
    } catch (deleteError) {
      setError(deleteError.message || "Failed to delete book.");
    }
  }

  return (
    <main>
      <h1>Book Reading Tracker</h1>

      <form onSubmit={addBook}>
        <input
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
          required
        />
        <button type="submit">Add Book</button>
      </form>

      {loading && <p>Loading books...</p>}
      {error && <p>{error}</p>}

      {!loading && books.length === 0 && <p>No books found.</p>}

      <ul>
        {books.map((book) => (
          <Book
            key={book.id}
            book={book}
            onToggle={toggleBook}
            onDelete={deleteBook}
          />
        ))}
      </ul>

      <p>
        Completed: {totalCompleted} / {books.length}
      </p>
    </main>
  );
}
