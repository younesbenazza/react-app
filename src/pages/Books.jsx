import AddBook from "../components/AddBook";
import BookTable from "../components/BookTable";
import { useState, useEffect } from "react";
import api from "../api";

function Books({ books, setBooks }) {
  const [openpopup, setOpenpopup] = useState(false);

  function toggleShow() {
    setOpenpopup(!openpopup);
  }

  const deleteBook = (id) => {
    api
      .delete(`/books/delete/${id}/`)
      .then((res) => {
        if (res.status === 200) alert("Book deleted!");
        else alert("Failed to delete Book.");
        setBooks(books.filter((book) => book.id !== id));
      })
      .catch((error) => alert(error));
  };

  const addBook = (book) => {
    api
      .post("/books/add/", book)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setBooks([...books, data.New_Book]);
        data.New_Book ? toggleShow() : console.log(data);
      })
      .catch((err) => alert(err));
  };

  const editBook = (bookId, updatedBook) => {
    api
      .put(`/books/update/${bookId}/`, updatedBook)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setBooks(books.map((book) => (book.id === bookId ? data.book : book)));
      })
      .catch((err) => alert(err));
  };

  const [search, setSearch] = useState("");
  return (
    <div className="">
      <div className="">
        <div className="flex items-center place-content-between">
          <h1 className="text-right font-semibold text-lg p-4 mx-6 font-custom">
            قائمة الكتب
          </h1>
          <input
            type="text"
            placeholder="البحث عن الكتب"
            value={search}
            onChange={(data) => setSearch(data.target.value)}
            className="bg-neutral-0 w-80 border py-2 px-4 focus:outline-none focus:border-blue-600 focusborder-b-2 transition-colors rtl-cursor rounded text-center"
          />
          <AddBook
            addBook={addBook}
            toggleShow={toggleShow}
            openbook={openpopup}
          />
        </div>
        <BookTable
          books={books}
          search={search}
          toggleShow={toggleShow}
          openbook={openpopup}
          deleteBook={deleteBook}
          editBook={editBook}
        />
      </div>
    </div>
  );
}

export default Books;
