import { useState } from "react";
import Modal from "./Modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ar from "date-fns/locale/ar";

export default function AddBook({ book }) {
  const [open, setOpen] = useState(false);
  const [publishDate, setPublishDate] = useState(null);
  const [enterDate, setEnterDate] = useState(null);
  return (
    <div className="">
      <button className="w-8 h-8" onClick={() => setOpen(true)}>
        <img src="../../icons/edit.png" alt="" />
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="m-2 p-5">
          <div className="text-right p-2 font-custom">
            يرجى تغيير معلومات الكتاب
          </div>
          <form action="" className="flex flex-col items-end p-4">
            <div className="p-2 flex flex-row-reverse gap-3">
              <div className="relative my-2">
                <input
                  type="text"
                  className="bg-neutral-50 w-56 border-b py-1 focus:outline-none focus:border-blue-600 focus:border-b-2 transition-colors rtl-cursor  peer"
                  id={"title" + book.id}
                  autoComplete="off"
                  placeholder=" "
                  required
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
                  className="bg-neutral-50 w-56 border-b py-1 focus:outline-none focus:border-blue-600 focus:border-b-2 transition-colors rtl-cursor  peer"
                  id={"type" + book.id}
                  autoComplete="off"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor={"type" + book.id}
                  className="absolute right-2 top-1 font-custom cursor-text peer-focus:text-xs peer-focus:-top-3  transition-all peer-focus:text-blue-500 text-neutral-600 custom-input"
                >
                  صنف الكتاب
                </label>
              </div>
            </div>

            <div className="flex gap-3 p-2 flex-row-reverse">
              <div className="relative my-2">
                <input
                  type="text"
                  className="bg-neutral-50 border-b w-56 py-1 focus:outline-none focus:border-blue-600 focus:border-b-2 transition-colors rtl-cursor  peer"
                  id={"author" + book.id}
                  autoComplete="off"
                  placeholder=" "
                  required
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
                  className="bg-neutral-50 w-56 border-b py-1 focus:outline-none focus:border-blue-600 focus:border-b-2 transition-colors rtl-cursor  peer "
                  id={"classNum" + book.id}
                  autoComplete="off"
                  placeholder=" "
                  required
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
                selected={enterDate}
                onChange={(date) => setEnterDate(date)}
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
              <DatePicker
                selected={publishDate}
                onChange={(date) => setPublishDate(date)}
                locale={ar}
                dateFormat="yyyy/MM/dd"
                className="bg-neutral-50 w-56 border-b my-1 py-1 px-2 focus:outline-none focus:border-blue-600 focus:border-b-2 transition-colors text-right placeholder-neutral-600 font-custom cursor-pointer"
                placeholderText="تاريخ النشر"
                required
                showYearDropdown
                showMonthDropdown
                scrollableYearDropdown
                maxDate={new Date()}
              />
            </div>
            <div className="flex gap-3 p-2 ">
              <div className="relative my-2 ">
                <input
                  type="text"
                  className="bg-neutral-50 w-56 border-b py-1 focus:outline-none focus:border-blue-600 focus:border-b-2 transition-colors rtl-cursor peer "
                  id={"status" + book.id}
                  autoComplete="off"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor={"status" + book.id}
                  className="absolute right-2 top-1 font-custom cursor-text peer-focus:text-xs peer-focus:-top-3  transition-all peer-focus:text-blue-500 text-neutral-600 custom-input"
                >
                  الحالة
                </label>
              </div>
              <div className="relative my-2">
                <input
                  type="text"
                  className="bg-neutral-50 w-56 border-b py-1 focus:outline-none focus:border-blue-600 focus:border-b-2 transition-colors rtl-cursor  peer "
                  id={"price" + book.id}
                  autoComplete="off"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor={"price" + book.id}
                  className="absolute right-2 top-1 font-custom cursor-text peer-focus:text-xs peer-focus:-top-3  transition-all peer-focus:text-blue-500 text-neutral-600 custom-input"
                >
                  السعر
                </label>
              </div>
            </div>
            <div className="flex items-center justify-end m-4 p-2 gap-4">
              <button className=" bg-blue-400 py-2 px-5 rounded-lg font-custom">
                تعديل
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
