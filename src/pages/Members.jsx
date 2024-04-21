import AddMember from "../components/AddMember";
import MembersTable from "../components/MembersTable";
import { useState, useEffect } from "react";
import api from "../api";

export default function Members({}) {
  const [members, setMembers] = useState([]);
  const [openpopup, setOpenpopup] = useState(false);

  function toggleShow() {
    setOpenpopup(!openpopup);
  }
  useEffect(() => {
    getMembers();
  }, []);

  const getMembers = () => {
    api
      .get("/students/")
      .then((res) => res.data)
      .then((data) => {
        setMembers(data.Students);
      })
      .catch((err) => alert(err));
  };

  const deleteMember = (id) => {
    api
      .delete(`/students/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) alert("student deleted!");
        else alert("Failed to delete student.");
        setMembers(members.filter((member) => member.id !== id));
      })
      .catch((error) => alert(error));
  };

  const addMember = (Member) => {
    api
      .post("/students/add/", Member)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        console.log(data);
        setMembers([...members, data.New_Member]);
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
        console.log(data);
        /*
        setBooks(books.map(book => book.id === bookId ? data.Updated_Book : book));
    */
      })
      .catch((err) => alert(err));
  };

  const [search, setSearch] = useState("");
  return (
    <div className="">
      <div className="">
        <div className="flex items-center place-content-between">
          <AddMember
            addMember={addMember}
            toggleShow={toggleShow}
            openmember={openpopup}
          />
          <input
            type="text"
            placeholder="البحث عن التلاميذ"
            value={search}
            onChange={(data) => setSearch(data.target.value)}
            className="bg-neutral-0 w-80 border py-2 px-4 focus:outline-none focus:border-blue-600 focusborder-b-2 transition-colors rtl-cursor rounded text-center"
          />
          <h1 className="text-right font-semibold text-lg p-4 mx-6 font-custom">
            قائمة التلاميذ
          </h1>
        </div>
        <MembersTable
          members={members}
          search={search}
          deleteMember={deleteMember}
        />
      </div>
    </div>
  );
}
