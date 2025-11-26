import { Home, X, Briefcase } from "lucide-react";
import { useLocation } from "react-router-dom";
import { FaRegUser } from "react-icons/fa6";
import { LiaAddressBookSolid } from "react-icons/lia";
import { GrResources } from "react-icons/gr";
import { BsEnvelope } from "react-icons/bs";
import NavItem from "./NavItem";
import NavList from "../Utils/NavList";
import { ImProfile } from "react-icons/im";
import Logo from "../assets/edu.png";
import { MdOutlineAssignment } from "react-icons/md";

const SideBar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();

  const navItems = [
    {
      to: "/",
      icon: <Home className="h-5 w-5" />,
      label: "Home",
    },
    {
      to: "/dashboard/overview",
      icon: <ImProfile className="h-5 w-5" />,
      label: "Overview",
    },
    {
      to: "/dashboard/profile",
      icon: <FaRegUser className="h-5 w-5" />,
      label: "Profile",
    },
    {
      to: "/dashboard/resources",
      icon: <GrResources className="h-5 w-5" />,
      label: "Resources",
    },
    {
      to: "/dashboard/courses",
      icon: <LiaAddressBookSolid className="h-5 w-5" />,
      label: "Courses",
    },
    {
      to: "/dashboard/job",
      icon: <Briefcase className="h-5 w-5" />,
      label: "Jobs",
    },
    {
      to: "/dashboard/notice",
      icon: <BsEnvelope className="h-5 w-5" />,
      label: "Notice Board",
    },
    {
      to: "/dashboard/assignment",
      icon: <MdOutlineAssignment className="h-5 w-5" />,
      label: "Assignments",
    },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed md:static z-40 top-0 left-0 h-full w-64 
          bg-gradient-to-b from-[#ffff] to-[#ffff] 
          text-black shadow-2xl border-r border-white/10 
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* Header / Brand */}
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <div className="flex items-center gap-2">
            <img src={Logo} alt="logo" className="w-11 h-5 bg-cyan-500" />
            <h1 className="font-bold text-lg tracking-wide">SkillHub</h1>
          </div>
          <button onClick={() => setIsOpen(false)} className="md:hidden">
            <X className="h-5 w-5 text-white/70 hover:text-white transition" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-6 space-y-1 px-2">
          {navItems.map(({ to, icon, label }) => {
            const active = location.pathname === to;
            return (
              <NavItem
                key={to}
                to={to}
                icon={icon}
                label={label}
                active={active}
                className={`flex items-center gap-6 px-4 py-2 rounded-lg cursor-pointer transition-all duration-200
                  ${
                    active
                      ? "bg-white/20 text-white font-semibold"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
              />
            );
          })}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-6 w-full px-4">
          <div className="text-xs text-black/70 text-center">
            © {new Date().getFullYear()} SkillHub. All Rights Reserved.
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
