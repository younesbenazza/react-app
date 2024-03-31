import BookTable from "../components/BookTable";

function Books() {
  return (
    <div className="">
      <div className="">
        <h1 className="text-right font-semibold text-lg p-4 mx-6 font-custom">
          قائمة الكتب
        </h1>
        <BookTable />
      </div>
    </div>
  );
}

export default Books;
