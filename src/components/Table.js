import React from "react";
import TableField from "./TableField";

const Table = ({ books, deleteBook, editBook }) => {
  return (
    <div className="table">
      <div className="tableHeading">
        <TableField fieldName="Başlık" />
        <TableField fieldName="Yazar" />
        <TableField fieldName="ISBN" />
        <TableField fieldName="Ayarlar" />
      </div>
      {books.map((book) => (
        <div key={book.bookId} className="tableRow">
          <TableField fieldName={book.bookTitle} />
          <TableField fieldName={book.bookAuthor} />
          <TableField fieldName={book.bookIsbn} />
          <TableField
            settingsField
            deleteBook={() => deleteBook(book.bookId)}
            editBook={() => editBook(book.bookId)}
          />
        </div>
      ))}
    </div>
  );
};

export default Table;
