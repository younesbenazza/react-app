import { useEffect, useState } from "react";
import MembersTable from "../components/MembersTable";

export default function Members() {
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
    <div className="">
      <div className="">
        <h1 className="text-right font-semibold text-lg p-4 mx-6 font-custom">
          قائمة التلاميذ
        </h1>
        <MembersTable />
      </div>
    </div>

    /*
    <div className="">
      {MembersData ? (
        MembersData.map((member) => {
          return (
            <div key={member.id} className="flex ">
              <p>{member.id} ,</p>
              <p>{member.name} ,</p>
              <p>{member.address} ,</p>
              <p>{member.category}</p>
            </div>
          );
        })
      ) : (
        <p>no data</p>
      )}
      <MembersTable />
    </div>*/
  );
}
