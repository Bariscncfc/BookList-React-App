import React from "react";

const Form = (props) => {
  const {
    title,
    setTitle,
    author,
    setAuthor,
    isbn,
    setIsbn,
    currentBookId,
    handleSubmit,
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <label>Kitap Başlık:</label>
      <input
        autoFocus
        required
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Kitap Yazarı:</label>
      <input
        required
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <label>Kitap ISBN kodu:</label>
      <input
        required
        type="text"
        value={isbn}
        onChange={(e) => setIsbn(e.target.value)}
      />
      <button tabIndex="0" type="submit">
        {currentBookId !== null ? "Güncelle" : "Ekle"}
      </button>
    </form>
  );
};

export default Form;
