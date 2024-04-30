import SidebarItem from "./SidebarItem";

function Sidebar() {
  return (
    <aside className="lg:w-56 p-4 bg-neutral-50 min-h-full">
      <nav className="font-custom ">
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
        <ul className="text-center">
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
