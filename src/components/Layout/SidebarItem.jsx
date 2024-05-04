import { NavLink } from "react-router-dom";

export default function SidebarItem({ icon, title, url }) {
  return (
    <NavLink to={url}>
      {({ isActive }) => {
        return (
          <li
            className={`flex w-12 lg:w-auto items-center gap-3 hover:cursor-pointer my-2 flex-row rounded-md p-2 ${
              isActive
                ? "bg-slate-200 hover:bg-slate-300 border border-sky-300"
                : "bg-slate-50 bg hover:bg-slate-100"
            }`}
          >
            <img src={icon} alt="Icon" className="w-8 h-8" />
            <span className="font-medium text-center hidden lg:block">
              {title}
            </span>
          </li>
        );
      }}
    </NavLink>
  );
}
