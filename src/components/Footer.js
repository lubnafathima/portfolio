import React from "react";
import { NAVIGATION, SOCIALS } from "../utils/data";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-y-2 border-y-black">
        <a
          href="/"
          className="py-3 w-full border-b-2 border-black md:border-r-2 lg:border-b-0 flex justify-start md:justify-center items-center text-[3vw] md:text-[2vw] font-bold uppercase hover:bg-black hover:text-white"
        >
          <h3 className="px-4">Lubna Fathima N</h3>
        </a>
        <div className="w-full flex items-start flex-col justify-between md:border-b-2 lg:border-b-0 lg:border-r-2 md:border-black">
          {NAVIGATION.map((nav) => (
            <a
              key={nav.name}
              href={nav.href}
              className={`w-full flex justify-start items-center gap-2 px-4 py-2 hover:bg-black hover:text-white border-black ${
                nav.id !== NAVIGATION.length ? "border-b-2" : ""
              }`}
            >
              {nav.icon}
              <span className="text-lg tracking-tight">{nav.name}</span>
            </a>
          ))}
        </div>
        <a
          href="mailto:lubnafathima275@gmail.com"
          className="w-full text-lg border-t-2 md:border-t-0 md:border-r-2 border-black flex justify-start md:justify-center items-center hover:bg-black hover:text-white py-3 px-4"
        >
          lubnafathima275@gmail.com
        </a>
        <div className="w-full hidden md:flex justify-center items-center text-start">
          <p className="p-4 text-xl font-semibold">
            Transforming ideas into powerfull web solutions.
          </p>
        </div>
      </div>
      <div className="py-6 px-4 flex justify-between items-center">
        <p className="text-md text-off_black">
          © 2024 Lubna Fathima N. All Rights Reserved
        </p>
        <div className="flex gap-4">
          {SOCIALS.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="border border-black p-4 rounded-full hover:bg-black hover:text-white"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
