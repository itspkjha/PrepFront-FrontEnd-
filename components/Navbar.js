import React, { useState } from "react";
import Image from "next/image";
import Logo from "../public/logo.png";
import Link from "next/link";
import NavItem from "./NavItem";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const MENU_LIST = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Our Experts",
    href: "/experts",
  },
  {
    text: "About us",
    href: "/about",
  },
  {
    text: "Contact us",
    href: "/contact",
  },
];

const Navbar = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <header>
      <nav className="nav">
        <Link href="/" className="nav__logo">
          <Image src={Logo} alt="LOGO" width={173} height={45} />
        </Link>

        {/* //have to currently work upon implementing responsive drawer */}
        <div className="nav__menu-bar">
          <button onClick={toggleDrawer}>Show</button>
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="top"
            className="drawer"
          >
            <div>
              {MENU_LIST.map((menu, idx) => {
                return (
                  <div onClick={() => setActiveIdx(idx)} key={menu.text}>
                    <NavItem active={activeIdx === idx} {...menu} />
                  </div>
                );
              })}
            </div>
          </Drawer>
        </div>

        <div className="nav__menu-list">
          {MENU_LIST.map((menu, idx) => {
            return (
              <div onClick={() => setActiveIdx(idx)} key={menu.text}>
                <NavItem active={activeIdx === idx} {...menu} />
              </div>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
