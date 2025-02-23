import React from "react";
import contact from "./Contact";
//images
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <img className="w-[50%]" src={Logo} alt="Logo" />
          </a>

          <button className="btn btn-sm">Booking</button>
          {/* <Link to="contact">
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
