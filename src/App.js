import React, { useState } from "react";
import { v4 as uuid4 } from "uuid";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";

const App = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [currentBookId, setCurrentBookId] = useState(null);
  const [books, setBooks] = useState([
    {
      bookTitle: title,
      bookAuthor: author,
      bookIsbn: isbn,
      bookId: uuid4(),
    },
  ]);

  const isInputInvalid = () => {
    return title.trim() === "" || author.trim() === "" || isbn.trim() === "";
  };

  const clearInputs = () => {
    setTitle("");
    setAuthor("");
    setIsbn("");
  };

  const addBook = () => {
    setBooks([
      ...books,
      {
        bookTitle: title,
        bookAuthor: author,
        bookIsbn: isbn,
        bookId: uuid4(),
      },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearInputs();

    if (isInputInvalid()) return;
    !currentBookId ? addBook() : updateBook();
    addBook();
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.bookId !== id));
  };

  const editBook = (book) => {
    setTitle(book.bookTitle);
    setAuthor(book.bookAuthor);
    setIsbn(book.bookIsbn);

    setCurrentBookId(book.currentBookId);
  };

  const updateBook = () => {
    setBooks(
      books.map((book) =>
        book.bookId === currentBookId
          ? { ...books, bookTitle: title, bookAuthor: author, bookIsbn: isbn }
          : book
      )
    );
  };

  return (
    <div className="App">
      <div className="Container">
        <Form
          title={title}
          setTitle={setTitle}
          author={author}
          setAuthor={setAuthor}
          isbn={isbn}
          setIsbn={setIsbn}
          currentBookId={currentBookId}
          handleSubmit={handleSubmit}
        />
        <Table
          books={books}
          deleteBook={deleteBook}
          editBook={editBook}
        ></Table>
      </div>
    </div>
  );
};

export default App;
