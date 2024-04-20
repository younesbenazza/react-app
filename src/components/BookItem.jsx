import { useState } from "react";
import EditBook from "./EditBook";
import DeleteBook from "./DeleteBook";

export default function BookItem({ book, id }) {
  const [openpopup, setOpenpopup] = useState(false);

  function toggleShow() {
    setOpenpopup(!openpopup);
  }

  var status;
  if (book.status == "available") {
    status = (
      <div className="bg-green-200 px-2 py-1 rounded-lg text-center">متاح</div>
    );
  } else if (book.status == "rented") {
    status = (
      <div className="bg-blue-200 px-2 py-1 rounded-lg text-center">مستعار</div>
    );
  } else if (book.status == "lost") {
    status = (
      <div className="bg-red-200 px-2 py-1 rounded-lg text-center">ضائع</div>
    );
  }
  return (
    <tr className="bg-white border font-custom hover:bg-neutral-50">
      <td className="p-3 flex items-center justify-center gap-4">
        <DeleteBook />
        <EditBook book={book} toggleShow={toggleShow} openbook={openpopup} />
      </td>
      <td className="p-3 text-sm  text-gray-700 ">{status}</td>
      <td className="p-3 text-sm text-right text-gray-700">{book.price} </td>
      <td className="p-3 text-sm text-right text-gray-700">
        {book.entry_date}
      </td>
      <td className="p-3 text-sm text-right text-gray-700">
        {book.class_number}
      </td>
      <td className="p-3 text-sm text-right text-gray-700 ">
        {book.published_date}
      </td>
      <td className="p-3 text-sm text-right text-gray-700">{book.author} </td>
      <td className="p-3 text-sm text-right text-gray-700">{book.title} </td>
      <td className="p-3 text-sm text-center text-gray-700 ">{id} </td>
    </tr>
  );
}
