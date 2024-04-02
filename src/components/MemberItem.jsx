import { Link } from "react-router-dom";

export default function MemberItem({ member }) {
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
      <td className="p-3 text-sm text-right text-gray-700">
        {member.category}
      </td>
      <td className="p-3 text-sm text-right text-gray-700 ">
        {member.address}
      </td>
      <td className="p-3 text-sm text-right text-gray-700">{member.name}</td>
      <td className="p-3 text-sm text-right text-gray-700">{member.name}</td>
      <td className="p-3 text-sm text-center text-gray-700 ">{member.id} </td>
    </tr>
  );
}
