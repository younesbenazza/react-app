import MemberItem from "./MemberItem";
import { useEffect, useState } from "react";

export default function MembersTable() {
  const [MembersData, setMembersData] = useState();
  useEffect(() => {
    const url = "http://127.0.0.1:8000/api/library/";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMembersData(data.members);
      });
  }, []);

  return (
    <div className="p-2">
      <table className="w-full border font-custom  ">
        <thead className="bg-gray-100 border-b-2 border-gray-300">
          <tr>
            <th className="p-3 text-sm font-semibold tracking-wide text-center">
              إجراء تعديل
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-right">
              القسم
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-right ">
              مكان الإزدياد
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-right ">
              تاريخ الإزدياد
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-right">
              الإسم
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-right">
              اللقب
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-right w-10 ">
              المعرف
            </th>
          </tr>
        </thead>
        <tbody>
          {MembersData ? (
            MembersData.map((member) => {
              return <MemberItem key={member.id} member={member} />;
            })
          ) : (
            <tr>
              <td colSpan={7} className="text-center p-2">
                لا يوجد بيانات
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
