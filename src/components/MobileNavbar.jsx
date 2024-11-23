import React from "react";

const MobileNavbar = () => {
  return (
    <div className="sticky top-0 z-40 w-full sm:hidden">
      <div className="flex h-16 items-center border-b border-gray-200 bg-white pl-0.5 pr-4 shadow-sm sm:px-0 sm:pl-3 sm:pr-6 sm:shadow-none">
        {/* Logo Section */}
        <div className="flex items-center gap-2 text-gray-700 sm:hidden">
          <div className="flex h-16 shrink-0 items-center">
            <div className="ml-0.5 w-16">
            <img src="/icon.svg" alt="logo" />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-1 gap-x-4 self-stretch sm:gap-x-6">
          <div className="flex-1"></div>
          <div className="flex items-center gap-x-4 sm:gap-x-6">
            {/* Schedule a Meeting Button */}
            <button className="grid h-[34px] cursor-pointer place-items-center items-center rounded-lg px-2 py-1.5 ring-1 ring-gray-300 sm:px-2.5 sm:py-1.5">
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  ></path>
                </svg>
                <span className="text-sm font-medium max-[400px]:hidden">
                  Schedule a meeting
                </span>
              </div>
            </button>

            {/* Profile Section */}
            <section data-dropdown="profile" className="relative w-full">
              <div className="flex cursor-pointer items-center">
                <span className="sr-only">Open user menu</span>
                <span className="relative inline-block flex-none overflow-hidden border border-gray-300 rounded-xl bg-white h-9 min-h-9 w-9 max-w-9">
                  <svg
                    className="h-full w-full text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                </span>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
