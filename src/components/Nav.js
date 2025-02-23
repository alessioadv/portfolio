import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { FaRegPaperPlane } from "react-icons/fa";
import { TfiVideoClapper, TfiMicrophoneAlt } from "react-icons/tfi";
import { GrSign } from "react-icons/gr";
import { Link } from "react-scroll";
import { TiHeadphones } from "react-icons/ti";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div
          className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] 
          mx-auto px-5 flex justify-between items-center text-2xl text-white/50"
        >
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BiHomeAlt />
          </Link>
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <TfiMicrophoneAlt />
          </Link>
          <Link
            to="services"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <TiHeadphones />
          </Link>
          <Link
            to="work"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <TfiVideoClapper />
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <FaRegPaperPlane />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
