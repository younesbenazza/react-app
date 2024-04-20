import { Link } from "react-router-dom";
import { useState } from "react";
import EditMember from "./EditMember";

export default function MemberItem({ member }) {
  const [openpopup, setOpenpopup] = useState(false);

  function toggleShow() {
    setOpenpopup(!openpopup);
  }
  return (
    <tr className="bg-white border font-custom hover:bg-neutral-50">
      <td className="p-3 flex items-center justify-center gap-4">
        <Link to={"/"}>
          {" "}
          <img className="w-8 h-8 " src="../../icons/delete.png" alt="" />{" "}
        </Link>
        <EditMember
          member={member}
          toggleShow={toggleShow}
          openmember={openpopup}
        />
      </td>
      <td className="p-3 text-sm text-right text-gray-700">
        {member.phone_number}
      </td>
      <td className="p-3 text-sm text-right text-gray-700">
        {member.phone_number}
      </td>
      <td className="p-3 text-sm text-right text-gray-700 ">{member.adress}</td>
      <td className="p-3 text-sm text-right text-gray-700">
        {member.first_name}
      </td>
      <td className="p-3 text-sm text-right text-gray-700">
        {member.last_name}
      </td>
      <td className="p-3 text-sm text-center text-gray-700 ">{member.id} </td>
    </tr>
  );
}
