import AddBook from "../components/AddBook";
import BookTable from "../components/BookTable";

function Books() {
  return (
    <div className="">
      <div className="">
        <div className="flex items-center place-content-between">
          <AddBook />
          <h1 className="text-right font-semibold text-lg p-4 mx-6 font-custom">
            قائمة الكتب
          </h1>
        </div>
        <BookTable />
      </div>
    </div>
  );
}

export default Books;
