import { useState } from "react";
import Modal from "./Modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ar from "date-fns/locale/ar";

export default function EditBook({ toggleShow, openbook, book, editBook }) {
  const [publishDate, setPublishDate] = useState(book.published_date);
  const [enterDate, setEnterDate] = useState(book.entry_date);
  const [title, setTitle] = useState(book.title);
  const [type, setType] = useState(book.category);
  const [author, setAuthor] = useState(book.author);
  const [classNum, setClassNum] = useState(book.class_number);
  const [price, setPrice] = useState(book.price);
  const [status, setStatus] = useState(book.statu);

  return (
    <div className="">
      <button className="w-8 h-8" onClick={toggleShow}>
        <img src="../../icons/edit.png" alt="" />
      </button>
      <Modal open={openbook} onClose={toggleShow}>
        <div className="m-2 p-5">
          <div className="text-right p-2 font-custom">
            يرجى تغيير معلومات الكتاب
          </div>
          <form
            id={book.id}
            onSubmit={(e) => {
              e.preventDefault();

              const updatedBook = {
                title: title,
                category: type,
                author: author,
                class_number: classNum,
                price: price,
                entry_date: enterDate,
                statu: status,
                published_date: publishDate,
              };
              editBook(book.id, updatedBook);
              toggleShow();
            }}
            className="flex flex-col p-4"
          >
            <div className="p-2 flex flex-row gap-3">
              <div className="relative my-2">
                <input
                  type="text"
                  className="bg-neutral-50 w-56 border-b py-1 focus:outline-none focus:border-blue-600 focus:border-b-2 transition-colors  peer"
                  id={"title" + book.id}
                  autoComplete="off"
                  placeholder=" "
                  required
                  value={title}
                  onChange={(data) => setTitle(data.target.value)}
                />
                <label
                  htmlFor={"title" + book.id}
                  className="absolute right-2 top-1 font-custom cursor-text peer-focus:text-xs peer-focus:-top-3  transition-all peer-focus:text-blue-500 text-neutral-600 custom-input"
                >
                  عنوان الكتاب
                </label>
              </div>
              <div className="relative my-2">
                <input
                  type="text"
                  className="bg-neutral-50 w-56 border-b py-1 focus:outline-none focus:border-blue-600 focus:border-b-2 transition-colors  peer"
                  id={"type" + book.id}
                  autoComplete="off"
                  placeholder=" "
                  required
                  value={type}
                  onChange={(data) => setType(data.target.value)}
                />
                <label
                  htmlFor={"type" + book.id}
                  className="absolute right-2 top-1 font-custom cursor-text peer-focus:text-xs peer-focus:-top-3  transition-all peer-focus:text-blue-500 text-neutral-600 custom-input"
                >
                  صنف الكتاب
                </label>
              </div>
            </div>

            <div className="flex gap-3 p-2 flex-row">
              <div className="relative my-2">
                <input
                  type="text"
                  className="bg-neutral-50 border-b w-56 py-1 focus:outline-none focus:border-blue-600 focus:border-b-2 transition-colors  peer"
                  id={"author" + book.id}
                  autoComplete="off"
                  placeholder=" "
                  required
                  value={author}
                  onChange={(data) => setAuthor(data.target.value)}
                />
                <label
                  htmlFor={"author" + book.id}
                  className="absolute right-2 top-1 font-custom cursor-text peer-focus:text-xs peer-focus:-top-3  transition-all peer-focus:text-blue-500 text-neutral-600 custom-input"
                >
                  المؤلف
                </label>
              </div>

              <div className="relative my-2">
                <input
                  type="text"
                  className="bg-neutral-50 w-56 border-b py-1 focus:outline-none focus:border-blue-600 focus:border-b-2 transition-colors  peer "
                  id={"classNum" + book.id}
                  autoComplete="off"
                  placeholder=" "
                  required
                  onChange={(data) => setClassNum(data.target.value)}
                  value={classNum}
                />
                <label
                  htmlFor={"classNum" + book.id}
                  className="absolute right-2 top-1 font-custom cursor-text peer-focus:text-xs peer-focus:-top-3  transition-all peer-focus:text-blue-500 text-neutral-600 custom-input"
                >
                  رقم الصنف
                </label>
              </div>
            </div>
            <div className="p-2 flex gap-3">
              <DatePicker
                selected={publishDate}
                onChange={(date) =>
                  setPublishDate(date.toISOString().slice(0, 10))
                }
                locale={ar}
                dateFormat="yyyy/MM/dd"
                className="bg-neutral-50 w-56 border-b my-1 py-1 px-2 focus:outline-none focus:border-blue-600 focus:border-b-2 transition-colors text-right placeholder-neutral-600 font-custom cursor-pointer "
                placeholderText="تاريخ النشر"
                required
                showYearDropdown
                showMonthDropdown
                scrollableYearDropdown
                maxDate={new Date()}
              />
              <DatePicker
                selected={enterDate}
                onChange={(date) =>
                  setEnterDate(date.toISOString().slice(0, 10))
                }
                locale={ar}
                dateFormat="yyyy/MM/dd"
                className="bg-neutral-50 w-56 border-b my-1 py-1 px-2 focus:outline-none focus:border-blue-600 focus:border-b-2 transition-colors text-right placeholder-neutral-600 font-custom cursor-pointer"
                placeholderText="تاريخ الدخول"
                required
                showYearDropdown
                showMonthDropdown
                scrollableYearDropdown
                maxDate={new Date()}
              />
            </div>
            <div className="flex gap-3 p-2">
              <div className="relative my-2">
                <input
                  type="text"
                  className="bg-neutral-50 w-56 border-b py-1 focus:outline-none focus:border-blue-600 focus:border-b-2 transition-colors  peer "
                  id={"price" + book.id}
                  autoComplete="off"
                  placeholder=" "
                  required
                  value={price}
                  onChange={(data) => setPrice(data.target.value)}
                />
                <label
                  htmlFor={"price" + book.id}
                  className="absolute right-2 top-1 font-custom cursor-text peer-focus:text-xs peer-focus:-top-3  transition-all peer-focus:text-blue-500 text-neutral-600 custom-input"
                >
                  السعر
                </label>
              </div>
              <div className="my-2">
                <select
                  onChange={(e) => setStatus(e.target.value)}
                  value={status}
                  className="bg-neutral-50 border-b w-40 focus:border-blue-600 cursor-pointer outline-blue-600"
                >
                  <option value="available">متاح</option>
                  <option value="rented">مستعار</option>
                  <option value="lost">ضائع</option>
                </select>
              </div>
            </div>
            <div className=" m-4 p-2 gap-4">
              <button className=" bg-blue-400 hover:bg-blue-500 py-2 px-5 rounded-lg font-custom">
                تعديل
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
