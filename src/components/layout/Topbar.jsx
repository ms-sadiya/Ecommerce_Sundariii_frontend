import React from "react";
import { TbBrandMeta } from "react-icons/tb"
import { IoLogoInstagram} from "react-icons/io";
import { FaFacebook } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="bg-(--topbar) text-black">
      <div className="container mx-auto  flex justify-between items-center  py-3 px-5">
        <div className=" hidden md:flex  items-center gap-3">
          <a href="#" className="inline-flex items-center">
           <TbBrandMeta className="h-5 w-5" />
          </a>
          <a href="#" className="inline-flex items-center">
           <IoLogoInstagram className="h-5 w-5" />
          </a>
          <a href="#" className="inline-flex items-center">
           <FaFacebook className="h-5 w-5" />
          </a>
        </div>
        <div className="text-sm text-center grow ">
          <span>We ship worldwide - Fast and reliable shipping!</span>
        </div>
        <div className="hidden md:block text-sm">
          <a href="tel: +1234567890" className="hover:text-gray-300">
            +1 (234) 567-890
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
