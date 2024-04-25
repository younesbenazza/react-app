import api from "../api";
export default function Loan() {
  const addRentBook = (rentBook) => {
    api
      .post("/rentboodk/", rentBook)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        console.log(data);
        /*setRentBooks([...rentBooks, data.New_RentBook]);*/
      })
      .catch((err) => alert(err));
  };
  let rentBook = {
    book_id: 4, // The ID of the Book instance that is being rented
    student_id: 8, // The ID of the Student who is renting the book
    rent_date: "2024-04-24", // The date when the book was rented
    return_date: "2024-05-24", // The date when the book is to be returned
    rent_statu: "retriever", // The status of the rent
  };
  addRentBook(rentBook);
  return <div className="">loan</div>;
}
