"use client";
import React from "react";
import Logo from "../assets/pediatric-care-logo.png";
import Image from "next/image";
import { navItems } from "../data/navItems";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();

  return (
    <div className="fixed bg-white z-10 w-full flex flex-col">
      <div className="container flex flex-row justify-between mx-auto items-center py-10">
        <div className="text-xl font-semibold text-description">
          Takoma Park , MD
        </div>
        <Image src={Logo} width={300} alt="" />
        <a
          href="tel:(301) 434-8800"
          className="text-xl font-semibold text-description"
        >
          (301) 434-8800
        </a>
      </div>
      <div className="bg-main-color w-full">
        <div className="flex justify-center items-center h-12">
          <div className="flex space-x-6">
            {navItems.map((item, index) => (
              <div
                key={index}
                className={`relative group ${item.submenu ? "hoverable" : ""}`}
              >
                <a
                  href={item.href || "#"}
                  className={`px-4 py-3 text-white font-semibold ${
                    pathName === item.href && "border-b-2 border-white"
                  }`}
                >
                  {item.title}
                </a>

                {/* Dropdown Menu */}
                {item.submenu && (
                  <div className="absolute hidden group-hover:flex flex-col z-10 mt-2 py-2 bg-main-color text-white rounded-lg shadow-lg opacity-0 translate-y-[-10px] transition-all duration-1000 group-hover:opacity-100 group-hover:translate-y-0">
                    {item.submenu.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.href}
                        className="inline text-nowrap px-5 py-2 hover:bg-gray-100 hover:text-main-color"
                      >
                        {subItem.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
