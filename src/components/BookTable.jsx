import BookItem from "./BookItem";
import { useEffect, useState } from "react";

export default function BookTable() {
  const [BooksData, setBooksData] = useState();
  useEffect(() => {
    const url = "http://127.0.0.1:8000/api/library";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setBooksData(data.books);
      });
  }, []);

  return (
    <div className="p-2 overflow-y-auto max-h-[500px]">
      <table className="w-full border font-custom  ">
        <thead className="sticky -top-2.5 bg-gray-100 border-b-2 border-gray-300">
          <tr>
            <th className="p-3 text-sm font-semibold tracking-wide text-center">
              إجراء تعديل
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-right ">
              الحالة
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-right">
              السعر
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-right">
              تاريخ الدخول
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-right">
              رقم الصنف
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-right">
              تاريخ النشر
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-right">
              المؤلف
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-right">
              عنوان الكتاب
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-right w-10 ">
              المعرف
            </th>
          </tr>
        </thead>
        <tbody>
          {BooksData ? (
            BooksData.map((book) => {
              return <BookItem key={book.id} book={book} />;
            })
          ) : (
            <tr>
              <td colSpan={9} className="text-center p-2">
                لا يوجد بيانات
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
