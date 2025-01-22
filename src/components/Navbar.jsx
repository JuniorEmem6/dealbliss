import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoOraimo from "../assets/logo.png";
import Logo from "../assets/oraimoLogo.png";
import { RiMenu2Fill } from "react-icons/ri";
import { MdCancel } from "react-icons/md";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav>
      <div className="flex items-center justify-around">
        <div className="flex items-center lg:ml-[-1600px] ml-[-98px]">
          <img
            src={LogoOraimo}
            alt="coupon codes and affiliate links"
            className="h-[50px] w-[50px] bg-white ml-[30px]"
          />
          <img
            src={Logo}
            alt="coupon codes and affiliate links"
            className="h-[50px] w-[50px] ml-[25px] bg-white"
          />
        </div>

        {/* Menu Button for Mobile */}
        <button
          className="md:hidden block text-gray-500 focus:outline-none mr-[-70px]"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          {isNavOpen ? (
            <MdCancel className="h-8 w-8" />
          ) : (
            <RiMenu2Fill className="h-8 w-8" />
          )}
        </button>
      </div>

      {/* Publish Button (visible in mobile navigation) */}
      {isNavOpen && (
        <div className="block md:hidden mt-[20px] h-[150px] bg-green-300">
          <ul>
            <li className="hover:text-blue-600 text-gray-500 text-[21px] font-semibold ml-[20px] md:text-[17px]">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-blue-600 text-gray-500 text-[21px] font-semibold ml-[20px] mt-[6px] md:text-[17px]">
              <a href="#deals">Deals</a>
            </li>
            <li className="hover:text-blue-600 text-gray-500 text-[21px] font-semibold ml-[20px] mt-[6px] md:text-[17px]">
              {/* <Link to="/archive">How to use Code</Link> */}
              <a href="#use">How to use Code</a>
            </li>
            <li className="hover:text-blue-600 text-gray-500 text-[21px] font-semibold ml-[20px] mt-[6px] md:text-[17px]">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
