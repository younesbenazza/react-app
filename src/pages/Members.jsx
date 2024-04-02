import MembersTable from "../components/MembersTable";

export default function Members() {
  return (
    <div className="">
      <div className="">
        <h1 className="text-right font-semibold text-lg p-4 mx-6 font-custom">
          قائمة التلاميذ
        </h1>
        <MembersTable />
      </div>
    </div>
  );
}
