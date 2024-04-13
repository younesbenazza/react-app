import BookItem from "./BookItem";

export default function BookTable({ books }) {
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
          {books ? (
            books.map((book, index) => {
              return <BookItem key={index} id={index + 1} book={book} />;
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
