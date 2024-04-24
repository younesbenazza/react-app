export default function Card({ title, number, icon }) {
  return (
    <div className="font-custom text-sm border p-4 m-2 w-1/3 h-44 text-right flex flex-col bg-blue-500 text-white rounded-lg  hover:bg-blue-600  ">
      <div className="flex gap-3">
        <img className="w-8 h-8 " src={icon} alt="" />
        <span className="font-semibold text-lg ">{title}</span>
      </div>
      <span className="text-end text-3xl p-10 font-bold ">{number}</span>
    </div>
  );
}
