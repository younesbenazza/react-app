import MemberItem from "./MemberItem";

export default function MembersTable({ members, search, deleteMember }) {
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
          {members.length > 0 ? (
            members
              .filter(
                (member) =>
                  member.first_name
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  member.last_name.toLowerCase().includes(search.toLowerCase())
              )
              .map((member) => {
                return (
                  <MemberItem
                    key={member.id}
                    member={member}
                    deleteMember={deleteMember}
                  />
                );
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
