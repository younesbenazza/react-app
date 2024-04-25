import { useState } from "react";
import api from "../api";
import AddArchive from "../components/AddArchive";
import ArchiveTable from "../components/ArchiveTable";

export default function Archive({ archives, setArchives }) {
  const [openpopup, setOpenpopup] = useState(false);
  const [search, setSearch] = useState("");
  const [succeed, setSucceed] = useState("");

  function toggleShow() {
    setOpenpopup(!openpopup);
  }

  const deleteArchive = (id) => {
    api
      .delete(`/archive/delete/${id}/`)
      .then((res) => {
        if (res.status === 200) alert("Archive deleted!");
        else alert("Failed to delete Archive.");
        setArchives(archives.filter((archive) => archive.id !== id));
      })
      .catch((error) => alert(error));
  };

  const addArchive = (archive) => {
    api
      .post("/archive/add/", archive)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setArchives([...archives, data.Archive]);
        data.Archive ? toggleShow() : console.log(data);
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

  return (
    <div className="">
      <div className="">
        <div className="flex items-center place-content-between">
          <h1 className="text-right font-semibold text-lg p-4 mx-6 font-custom">
            قائمة الأرشيف
          </h1>
          <input
            type="text"
            placeholder="البحث في الأرشيف"
            value={search}
            onChange={(data) => setSearch(data.target.value)}
            className="bg-neutral-0 w-80 border py-2 px-4 focus:outline-none focus:border-blue-600 focusborder-b-2 transition-colors rtl-cursor rounded text-center"
          />
          <AddArchive
            addArchive={addArchive}
            toggleShow={toggleShow}
            openarchive={openpopup}
          />
        </div>
        <ArchiveTable
          archives={archives}
          search={search}
          deleteArchive={deleteArchive}
        />
      </div>
    </div>
  );
}
