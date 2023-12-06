import { useState } from "react";
import { close, logo, menu } from "../assets";

export const Navbar = () => {

    const [open, setOpen] = useState(false)


  return (
    <div className="flex justify-between max-w-[1400px] mx-auto items-center h-[60px] px-5 py-5 lg:px-36">
      <div className="logo">
        <img src={logo} alt="hoobank" className="w-[100px]" />
      </div>

      <div className="lg:hidden cursor-pointer"  onClick={()=> setOpen(!open)}>
        {open ? <img src={close} alt="navmenu" /> : <img src={menu} alt="navmenu" />}
      </div>

      {/* for desktop screen */}
      <ul className={`hidden lg:flex flex-row items-center text-[16px]`}>
        <li className="mr-10 text-dimWhite">Home</li>
        <li className="mr-10 text-dimWhite">About</li>
        <li className="mr-10 text-dimWhite">Features</li>
        <li className="mr-10 text-dimWhite">Solution</li>
      </ul>

      {/* for mobile screen */}
      <div className={` ${open ? "block" : "hidden"} p-6 top-[60px] absolute right-0 mx-4 my-5 min-w-[150px] slide-up rounded-xl bg-black-gradient`}>
        <ul className="text-[16px]">
          <li className="my-5 text-dimWhite">Home</li>
          <li className="my-5 text-dimWhite">About</li>
          <li className="my-5 text-dimWhite">Features</li>
          <li className="my-5 text-dimWhite">Solution</li>
        </ul>
      </div>
    </div>
  );
};
