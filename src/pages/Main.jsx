import AccountDetails from "../components/AccountDetails";
import Card from "../components/Card";
import { useState, useEffect } from "react";
import api from "../api";

function Main() {
  const [books, setBooks] = useState("");
  const [members, setMembers] = useState("");
  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = () => {
    api
      .get("/books/")
      .then((res) => res.data)
      .then((data) => {
        setBooks(data.Books.length);
      })
      .catch((err) => alert(err));
  };
  useEffect(() => {
    getMembers();
  }, []);

  const getMembers = () => {
    api
      .get("/students/")
      .then((res) => res.data)
      .then((data) => {
        setMembers(data.Students.length);
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="mx-4 my-10">
      <div className="flex my-4 gap-3">
        <Card
          title={"عدد الإعارات"}
          number={"0"}
          icon={"../../icons/loan.png"}
        />
        <Card
          title={"عدد التلاميذ المسجلين"}
          number={members}
          icon={"../../icons/person.png"}
        />
        <Card
          title={"عدد الكتب"}
          number={books}
          icon={"../../icons/books.png"}
        />
      </div>
      <div className="mx-2">
        <AccountDetails />
      </div>
    </div>
  );
}

export default Main;
