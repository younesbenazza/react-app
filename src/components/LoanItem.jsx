import { useState } from "react";
import Delete from "./Delete";

export default function LoanItem({
  loan,
  deleteLoan,
  books,
  members,
  editLoan,
  editBook,
}) {
  const [openpopup, setOpenpopup] = useState(false);
  const [returned, setReturned] = useState(loan.rent_statu);

  function toggleShow() {
    setOpenpopup(!openpopup);
  }

  function getObjectbyId(list, id) {
    return list ? list.find((object) => object.id === id) : null;
  }
  const member = getObjectbyId(members, loan.student_id);
  const book = getObjectbyId(books, loan.book_id);
  return (
    <tr className="bg-white border font-custom hover:bg-neutral-50 ">
      <td className="p-3 text-sm text-center text-gray-700 ">{loan.id} </td>
      <td className="p-3 text-sm text-right text-gray-700   ">
        <div className="flex gap-0.5">
          {" "}
          {member ? member.last_name : <p>معلومات التلميذ محذوفة</p>}
          <p></p>
          {member ? member.first_name : null}
        </div>
      </td>
      <td className="p-3 text-sm text-right text-gray-700">
        {book ? book.title : <p>معلومات الكتاب محذوفة</p>}
      </td>
      <td className="p-3 text-sm text-right text-gray-700 ">
        {loan.rent_date}
      </td>
      <td className="p-3 text-sm text-right text-gray-700">
        {loan.return_date}
      </td>
      <td className="p-3 text-sm  text-gray-700">
        <div className="flex gap-0.5 justify-center">
          {Math.max(
            Math.floor(
              (new Date(loan.return_date) - new Date(loan.rent_date)) /
                (1000 * 60 * 60 * 24)
            ),
            0
          )}
          <p>يوم</p>
        </div>
      </td>
      <td className="p-3 text-sm text-gray-700 ">
        <div className="flex gap-0.5 justify-center">
          {Math.max(
            Math.floor(
              (new Date(loan.return_date) - new Date()) / (1000 * 60 * 60 * 24)
            ),
            0
          )}
          <p>يوم</p>
        </div>
      </td>
      <td className="p-3 text-sm text-center text-gray-700">
        {returned && (
          <button
            onClick={() => {
              editLoan(loan.id, {
                ...loan,

                rent_statu: false,
              });
              editBook(book.id, { ...book, statu: "rented" });
            }}
            className="w-28 border rounded-lg p-2 bg-green-500 text-white hover:bg-green-600"
          >
            تم إرجاعه
          </button>
        )}{" "}
        {!returned && (
          <button
            onClick={() => {
              editLoan(loan.id, {
                ...loan,

                rent_statu: true,
              });
              editBook(book.id, { ...book, statu: "available" });
            }}
            className="w-28 border rounded-lg p-2 bg-red-500 text-white hover:bg-red-600"
          >
            لم يتم إرجاعه
          </button>
        )}
      </td>

      <td className="p-3 flex items-center justify-center gap-4">
        <Delete
          deleteFunc={deleteLoan}
          id={loan.id}
          text={"هل أنت متأكد من رغبتك في حذف هذه الإعارة"}
        />
      </td>
    </tr>
  );
}
