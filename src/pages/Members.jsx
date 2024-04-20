import AddMember from "../components/AddMember";
import MembersTable from "../components/MembersTable";
import { useState } from "react";
export default function Members({
  AddMemberFunc,
  members,
  toggleShow,
  openmember,
}) {
  const [search, setSearch] = useState("");
  return (
    <div className="">
      <div className="">
        <div className="flex items-center place-content-between">
          <AddMember
            AddMemberFunc={AddMemberFunc}
            toggleShow={toggleShow}
            openmember={openmember}
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
        <MembersTable members={members} search={search} />
      </div>
    </div>
  );
}
