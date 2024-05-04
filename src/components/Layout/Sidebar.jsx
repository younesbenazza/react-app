import SidebarItem from "./SidebarItem";

function Sidebar() {
  return (
    <aside className="w-20 lg:w-56 p-4 bg-slate-50 min-h-full  ">
      <nav className="font-custom fixed w-14 lg:w-48">
        <div className="hidden lg:block">
          <div className="flex items-center place-content-center gap-3 hover:cursor-pointer pd-3 m-4 ">
            <img
              className="w-10 h-10"
              src="../../../icons/library.png"
              alt=""
            />
            <span className=" font-medium hover:text-md  ">مكتبتي</span>
          </div>
        </div>
        <ul
          className="text-center "
          style={{ maxHeight: "calc(100vh - 80px)", overflowY: "auto" }}
        >
          <li className="my-3 text-slate-600 text-xs lg:text-base ">
            الصفحة الرئيسية
          </li>
          <SidebarItem
            title={"الصفحة الرئيسية"}
            icon={"../../../icons/homepage.png"}
            url={"/"}
          />
          <li className="my-3 text-slate-600 text-xs lg:text-base">
            إدارة المكتبة
          </li>
          <SidebarItem
            title={"الكتب"}
            icon={"../../../icons/books.png"}
            url={"/books"}
          />
          <SidebarItem
            title={"التلاميذ"}
            icon={"../../../icons/person.png"}
            url={"/members"}
          />
          <SidebarItem
            title={"الإعارة"}
            icon={"../../../icons/loan.png"}
            url={"/loan"}
          />
          <SidebarItem
            title={"الإحصائيات"}
            icon={"../../../icons/statistics.png"}
            url={"/statistics"}
          />
          <SidebarItem
            title={"بطاقة المكتبة"}
            icon={"../../../icons/card.png"}
            url={"/librarycard"}
          />
          <li className="my-3 text-slate-600 text-xs lg:text-base">
            إدارة الأرشيف
          </li>
          <SidebarItem
            title={"الأرشيف"}
            icon={"../../../icons/archive.png"}
            url={"/archive"}
          />
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
