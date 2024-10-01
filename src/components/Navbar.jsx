import React from "react";
import Logo from "../assets/Logo.png";
import Logo2 from "../assets/Logo2.png";

function Navbar({ page }) {
  return (
    <div className="flex justify-between items-center px-8 pt-5">
      <div>
        <img src={page == 3 ? Logo2 : Logo} alt="Logo" />
      </div>
      <div className="flex gap-5 items-center">
        <button className={`${page === 3 ? "text-[#12122D]" : "text-white"}`}>
          Become a Linco partner
        </button>
        <button
          className={`px-5 py-2 rounded-full ${
            page == 3 ? "text-white" : "text-[#F15B39]"
          }
          ${page == 3 ? "bg-[#12122D]" : "bg-white"}`}
        >
          Contact us
        </button>
      </div>
    </div>
  );
}

export default Navbar;
