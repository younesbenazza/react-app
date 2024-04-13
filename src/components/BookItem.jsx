import { Link } from "react-router-dom";
import EditBook from "./EditBook";
import DeleteBook from "./DeleteBook";

export default function BookItem({ book, id }) {
  return (
    <tr className="bg-white border font-custom hover:bg-neutral-50">
      <td className="p-3 flex items-center justify-center gap-4">
        <DeleteBook />
        <EditBook book={book} id={id} />
      </td>
      <td className="p-3 text-sm  text-gray-700 ">
        <div className="bg-green-100 px-2 py-1 rounded-lg text-center">
          متاح
        </div>
      </td>
      <td className="p-3 text-sm text-right text-gray-700">{book.price} </td>
      <td className="p-3 text-sm text-right text-gray-700">
        {/*book.entry_date.toISOString().slice(0, 10)*/}
      </td>
      <td className="p-3 text-sm text-right text-gray-700">
        {book.class_number}
      </td>
      <td className="p-3 text-sm text-right text-gray-700 ">
        {/*book.published_date.toISOString().slice(0, 10)*/}
      </td>
      <td className="p-3 text-sm text-right text-gray-700">{book.author} </td>
      <td className="p-3 text-sm text-right text-gray-700">{book.title} </td>
      <td className="p-3 text-sm text-center text-gray-700 ">{id} </td>
    </tr>
  );
}
