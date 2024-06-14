import React, { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NAVIGATION } from "../utils/data";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="z-50 sticky top-0 flex justify-end lg:justify-center">
      <div className="flex lg:hidden p-4">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <nav className="hidden lg:flex items-center flex-wrap border-2 border-black rounded-full my-6 bg-white">
        <div className="w-full flex items-center justify-center flex-shrink-0">
          {NAVIGATION.map((item) => (
            <div
              key={item.name}
              className={`w-[10rem] flex justify-center items-center gap-2 py-4 text-black hover:bg-black hover:text-white rounded-full cursor-pointer ${
                item.id !== NAVIGATION.length ? "border-r-2 border-black" : ""
              }`}
            >
              {item.icon}
              <a
                href={item.href}
                className="font-semibold text-lg tracking-tight"
              >
                {item.name}
              </a>
            </div>
          ))}
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5 text-2xl font-semibold">
              LUBNA FATHIMA N
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {NAVIGATION.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 flex rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:bg-gray-50"
                  >
                    <img
                      src={item.icon}
                      alt={`${item.name} icon`}
                      className="w-6 h-6 mr-2"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  );
};

export default Navbar;
