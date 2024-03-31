import { Link } from "react-router-dom";

export default function MemberItem() {
  return (
    <tr className="bg-white border font-custom hover:bg-neutral-50">
      <td className="p-3 flex items-center justify-center gap-4">
        <Link to={"/"}>
          {" "}
          <img className="w-8 h-8 " src="../../icons/delete.png" alt="" />{" "}
        </Link>
        <Link to={"/"}>
          {" "}
          <img className="w-8 h-8 " src="../../icons/edit.png" alt="" />{" "}
        </Link>
      </td>
      <td className="p-3 text-sm text-right text-gray-700">الصفحة الرئيسية</td>
      <td className="p-3 text-sm text-right text-gray-700 ">
        الصفحة الرئيسية الصفحة الرئيسية الصفحة الصفحة الرئيسية
      </td>
      <td className="p-3 text-sm text-right text-gray-700">الصفحة الرئيسية</td>
      <td className="p-3 text-sm text-right text-gray-700">الصفحة الرئيسية</td>
      <td className="p-3 text-sm text-center text-gray-700 ">2</td>
    </tr>
  );
}
