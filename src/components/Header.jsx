import React from "react";

const Header = () => {
  return (
    <header className="w-full pt-5 px-10">
      <div className="duration-300 transition-all">
        <section className="duration-300 transition-all">
          <section className="border rounded-lg bg-white px-5 py-3.5">
            <section className="flex items-start gap-5 mb-3">
              <div className="mt-0.5">
                <span className="relative inline-block flex-none overflow-hidden border border-gray-300 rounded-full bg-white h-8 min-w-8 w-8 max-w-8">
                  <svg
                    className="h-full w-full text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                </span>
              </div>
              <textarea
                rows="1"
                placeholder='Try searching "Python developer with 4 years experience"'
                className="text-sm bg-transparent px-0 text-gray-900 flex-1 border-none ring-0 focus:outline-none resize-none shadow-none focus:ring-0"
                style={{ height: "36px", overflow: "hidden" }}
              ></textarea>
            </section>
            <section className="flex items-start gap-6">
              <div className="rounded-full grid place-items-center h-7 w-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-sliders-horizontal text-gray-400"
                >
                  <line x1="21" x2="14" y1="4" y2="4"></line>
                  <line x1="10" x2="3" y1="4" y2="4"></line>
                  <line x1="21" x2="12" y1="12" y2="12"></line>
                  <line x1="8" x2="3" y1="12" y2="12"></line>
                  <line x1="21" x2="16" y1="20" y2="20"></line>
                  <line x1="12" x2="3" y1="20" y2="20"></line>
                  <line x1="14" x2="14" y1="2" y2="6"></line>
                  <line x1="8" x2="8" y1="10" y2="14"></line>
                  <line x1="16" x2="16" y1="18" y2="22"></line>
                </svg>
              </div>
              <button className="flex items-center group/filters cursor-pointer">
                <p className="text-sm text-left leading-7">
                  Can work&nbsp;
                  <span className="bg-indigo-50 px-2 py-1 rounded-md text-indigo-600 whitespace-nowrap">
                    Full-time or Part-time
                  </span>
                  &nbsp;
                  <span className="ml-3 inline-flex text-sm items-center gap-0.5 text-gray-400 group-hover/filters:text-gray-500 transition-colors duration-300">
                    <span className="whitespace-nowrap">Edit filters</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-up-right h-4 w-4"
                    >
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </span>
                </p>
              </button>
            </section>
          </section>
        </section>
      </div>
    </header>
  );
};

export default Header;
