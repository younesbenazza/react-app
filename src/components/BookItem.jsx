import { Link } from "react-router-dom";
import EditBook from "./EditBook";
import DeleteBook from "./DeleteBook";

export default function BookItem() {
  return (
    <tr className="bg-white border font-custom hover:bg-neutral-50">
      <td className="p-3 flex items-center justify-center gap-4">
        <DeleteBook />
        <EditBook />
      </td>
      <td className="p-3 text-sm  text-gray-700 ">
        <div className="bg-green-100 px-2 py-1 rounded-lg text-center">
          متاح
        </div>
      </td>
      <td className="p-3 text-sm text-right text-gray-700">200د</td>
      <td className="p-3 text-sm text-right text-gray-700">12/02/2021</td>
      <td className="p-3 text-sm text-right text-gray-700">2ي-ب</td>
      <td className="p-3 text-sm text-right text-gray-700 ">16/26/2001</td>
      <td className="p-3 text-sm text-right text-gray-700">يونس</td>
      <td className="p-3 text-sm text-right text-gray-700">ألف ليلة و ليلة</td>
      <td className="p-3 text-sm text-center text-gray-700 ">2</td>
    </tr>
  );
}
