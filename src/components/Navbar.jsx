import { useState } from "react";
import { close, logo, menu } from "../assets";

import { Link } from "react-router-dom";

export const Navbar = ({ scrollToSection }) => {
  const navLinks = [
    {
      id: "home",
      title: "Home",
      scrollTo: "Hero",
    },
    {
      id: "features",
      title: "Features",
      scrollTo: "features",
    },
    {
      id: "product",
      title: "Product",
      scrollTo: "billing",
    },
    {
      id: "clients",
      title: "Clients",
      scrollTo: "testimonial",
    },
    {
      id: "getStarted",
      title: "Get Started",
      scrollTo: "getstarted",
    },
  ];

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <div className="flex justify-between max-w-[1400px] mx-auto items-center h-[60px] px-5 py-5 lg:px-36">
      <div className="logo">
        <img src={logo} alt="hoobank" className="w-[100px]" />
      </div>

      <div className="lg:hidden cursor-pointer" onClick={() => setOpen(!open)}>
        {open ? (
          <img src={close} alt="navmenu" />
        ) : (
          <img src={menu} alt="navmenu" />
        )}
      </div>

      {/* for desktop screen */}
      <ul className={`hidden lg:flex flex-row items-center text-[16px]`}>
        {navLinks.map((link) => {
          return (
            <Link
              to={`#${link.scrollTo}`}
              onClick={() => scrollToSection(link.scrollTo)}
              key={link.id}
            >
              <li
                className={`mr-10 ${
                  active === link.title ? "text-white " : "text-dimWhite"
                } `}
                onClick={() => setActive(link.title)}
              >
                {link.title}
              </li>
            </Link>
          );
        })}
      </ul>

      {/* for mobile screen */}
      <div
        className={` ${
          open ? "block" : "hidden"
        } p-6 top-[60px] absolute right-0 mx-4 my-5 min-w-[150px] slide-up rounded-xl bg-black-gradient`}
      >
        <ul className="text-[16px]">
          {navLinks.map((link) => {
            return (
              <Link
                to={`#${link.scrollTo}`}
                onClick={() => {
                  scrollToSection(link.scrollTo);
                  setOpen(false);
                }}
                key={link.id}
              >
                <li
                  className={`my-5 ${
                    active === link.title ? "text-white" : "text-dimWhite"
                  }`}
                  onClick={() => setActive(link.title)}
                >
                  {link.title}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
