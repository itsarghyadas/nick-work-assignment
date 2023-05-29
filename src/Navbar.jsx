import React, { useState, useEffect } from "react";
import { GiBrain } from "react-icons/gi";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoChatbubblesOutline } from "react-icons/io5";
import { RiGalleryLine } from "react-icons/ri";
import {
  AiOutlineCloseCircle,
  AiOutlineClear,
  AiOutlineHome,
  AiOutlineCreditCard,
  AiFillInstagram,
  AiOutlineCamera,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { BsDiscord } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import {
  MdOutlineDashboard,
  MdEmail,
  MdGeneratingTokens,
} from "react-icons/md";
function MenuItem({ icon: Icon, text, iconColor }) {
  return (
    <div className="flex items-center space-x-3">
      <div className="nav-home-icon">
        <Icon className={`${iconColor} text-xl`} />
      </div>
      <h1 className="mt-1 text-[1.1rem] font-bold text-slate-700">{text}</h1>
    </div>
  );
}

const iconComponents = [
  { Icon: BsDiscord, color: "text-indigo-500" },
  { Icon: AiFillInstagram, color: "text-rose-500" },
  { Icon: FaTwitter, color: "text-sky-600" },
  { Icon: MdEmail, color: "text-teal-500" },
];

const IconList = () => (
  <div className="header-follow absolute bottom-5 left-0 right-0">
    <div className="flex items-center justify-evenly space-x-2 px-6 py-4">
      {iconComponents.map(({ Icon, color }) => (
        <div key={color}>
          <Icon className={`text-2xl ${color}`} />
        </div>
      ))}
    </div>
  </div>
);

function MobileMenu({ onClose }) {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".main-nav-menu-mobile")) {
        onClose();
      }
    };
    document.body.addEventListener("click", handleOutsideClick);
    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div className="main-nav-menu-mobile absolute left-0 top-0 bottom-0 right-0 border-r border-slate-400/30 border-dashed w-[250px] bg-zinc-50 md:w-[280px] lg:flex lg:w-[300px] lg:flex-col">
      <div>
        <div className="header-menu lg:hidden">
          <ul className="flex-col space-y-7 px-7 py-10 text-[1.1rem] font-bold text-slate-700">
            <MenuItem
              icon={AiOutlineHome}
              iconColor="text-slate-800"
              text="Home"
            />
            <MenuItem
              icon={AiOutlineCreditCard}
              iconColor="text-slate-800"
              text="Pricing"
            />
            <MenuItem
              icon={RiGalleryLine}
              iconColor="text-slate-800"
              text="Services"
            />
          </ul>
          <div className="header-button space-y-2">
            <div className=" px-6 lg:flex lg:items-center">
              <button className="w-full justify-center rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800">
                <span>
                  Book Now <span aria-hidden="true">→</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <IconList />
    </div>
  );
}

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleMobileMenuToggle = (event) => {
    event.stopPropagation(); // Stop event propagation
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  /* const navigate = useNavigate(); */
  return (
    <div className="navbar-home fixed top-0 z-10 w-full bg-transparent lg:relative ">
      <nav className="z-1000 sticky top-0 mx-auto max-w-7xl border-b border-dashed px-5 py-2.5 lg:border-none lg:py-4">
        <div className="flex items-center justify-between">
          <button>
            <div className="header-logo flex items-center space-x-2">
              <AiOutlineClear className="text-3xl text-indigo-600 -mt-1" />
              <h1 className="text-xl font-clash text-indigo-700/90 font-[650]">
                HouseCleaning
              </h1>
            </div>
          </button>
          <div className="header-menu hidden lg:block">
            <ul className="flex space-x-10 text-base font-bold text-slate-700">
              <li>
                <button>Home</button>
              </li>
              <li>
                <button>Services</button>
              </li>
              <li>
                <button>Pricing</button>
              </li>
            </ul>
          </div>
          <div className="header-button space-x-2">
            <div className="hidden lg:flex lg:items-center">
              <button className="inline-flex justify-center rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800">
                <span>
                  Book Now <span aria-hidden="true">→</span>
                </span>
              </button>
            </div>
          </div>
          <div className=" flex items-center justify-center lg:hidden">
            <button
              className={`advanced-setting-toggle focus:outline-none ${
                isMobileMenuOpen
                  ? "rounded-full bg-slate-800 text-slate-200"
                  : "text-slate-900"
              }`}
              onClick={handleMobileMenuToggle}
            >
              {isMobileMenuOpen ? (
                <AiOutlineCloseCircle className="text-2xl focus:outline-none active:scale-110 active:text-slate-900" />
              ) : (
                <HiMenuAlt3 className="text-2xl text-slate-900 focus:outline-none active:scale-110 active:text-red-500" />
              )}
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`main-nav-menu fixed inset-0 top-[49px] z-[2000] transform overflow-auto bg-transparent transition duration-150 lg:hidden ${
          isMobileMenuOpen ? "-translate-x-0" : "-translate-x-full"
        }`}
      >
        <MobileMenu onClose={handleMobileMenuClose} />
      </div>
    </div>
  );
}

export default Navbar;
