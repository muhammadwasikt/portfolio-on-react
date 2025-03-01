import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "./common/button";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Navbar = () => {
  const [isResponsive, setIsResponsive] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const click = () => setIsResponsive(!isResponsive);
  const sendMail = () => {
    window.location.href =
      "mailto:wasikhatri11@gmail.com?subject=Inquiry from Portfolio&body=Hello Wasi,";
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-[#080808] z-20 text-white px-6 py-4 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer text-blue-200">
          WASI
        </div>

        <div className="hidden md:flex space-x-6 items-center">
          {["Home", "About", "Services", "Project", "Contact"].map(
            (item, index) => (
              <NavLink
                key={index}
                to={`/${item.toLowerCase().replace(" ", "")}`}
                className="hover:text-gray-400 transition"
              >
                {item}
              </NavLink>
            )
          )}
          <Button title="Contact Me" click={sendMail} />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-3xl cursor-pointer" onClick={click}>
          <HiMiniBars3BottomRight />
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-[#0A1128] flex flex-col p-7 space-y-6 text-lg transform ${isResponsive ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300`}
        >
          <AiOutlineCloseCircle
            className="absolute top-5 right-5 text-4xl cursor-pointer"
            onClick={click}
          />

          {["Home", "About", "Services", "Project", "Contact"].map(
            (item, index) => (
              <NavLink
                key={index}
                to={`/${item.toLowerCase().replace(" ", "")}`}
                onClick={click}
                className="hover:text-gray-400 transition text-xl"
              >
                {item}
              </NavLink>
            )
          )}
          <Button title="Contact Me" click={sendMail} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
