import { Link } from "react-router-dom";

function NavItem({ to, icon, label, active }) {
  return (
    <Link to={to}>
      <div
        className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer hover:bg-emerald-50 transition ${
          active ? "bg-emerald-50 border border-emerald-100" : ""
        }`}
      >
        <div className="text-muted-foreground">{icon}</div>
        <div
          className={`text-sm ${
            active ? "font-semibold text-emerald-700" : "text-muted-foreground"
          }`}
        >
          {label}
        </div>
      </div>
    </Link>
  );
}

export default NavItem;
