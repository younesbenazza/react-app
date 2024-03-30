import { NavLink } from "react-router-dom";

export default function SidebarItem({ icon, title, url }) {
  return (
    <NavLink to={url}>
      {({ isActive }) => {
        return (
          <li
            className={`flex items-center gap-3 hover:cursor-pointer my-2 flex-row-reverse rounded-md p-2 ${
              isActive
                ? "bg-neutral-200 hover:bg-neutral-300"
                : "bg-neutral-50 hover:bg-neutral-100"
            }`}
          >
            <img src={icon} alt="Icon" className="w-8 h-8" />
            <span className="font-medium text-center">{title}</span>
          </li>
        );
      }}
    </NavLink>
  );
}
