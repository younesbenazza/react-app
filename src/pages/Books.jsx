import AddBook from "../components/AddBook";
import BookTable from "../components/BookTable";
import { useState } from "react";

function Books({ AddBookFunc, books, toggleShow, openbook }) {
  const [search, setSearch] = useState("");
  return (
    <div className="">
      <div className="">
        <div className="flex items-center place-content-between">
          <AddBook
            AddBookFunc={AddBookFunc}
            toggleShow={toggleShow}
            openbook={openbook}
          />
          <input
            type="text"
            placeholder="البحث عن الكتب"
            value={search}
            onChange={(data) => setSearch(data.target.value)}
            className="bg-neutral-0 w-80 border py-2 px-4 focus:outline-none focus:border-blue-600 focusborder-b-2 transition-colors rtl-cursor rounded text-center"
          />
          <h1 className="text-right font-semibold text-lg p-4 mx-6 font-custom">
            قائمة الكتب
          </h1>
        </div>
        <BookTable
          books={books}
          search={search}
          toggleShow={toggleShow}
          openbook={openbook}
        />
      </div>
    </div>
  );
}

export default Books;
