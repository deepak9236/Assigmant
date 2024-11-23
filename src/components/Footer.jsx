import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 z-10 w-screen border-t bg-white py-3 sm:hidden">
      <ul role="list" className="flex items-center justify-around">
        <li className="relative">
          <div className="group flex aspect-square w-full cursor-pointer flex-col items-center justify-center gap-1 text-black">
            <div className="rounded-xl text-gray-900 transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                className="h-6 w-6 shrink-0 transition-all duration-300 scale-110 fill-indigo-600 text-indigo-600"
                style={{
                  display: "block",
                  height: "20px",
                  width: "20px",
                  padding: "0.5px",
                  stroke: "currentcolor",
                  strokeWidth: 4.5,
                }}
              >
                <path fill="transparent" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path>
              </svg>
            </div>
            <span className="text-[10px] text-indigo-600">Search</span>
          </div>
        </li>
        <li className="relative">
          <div className="group flex aspect-square w-full cursor-pointer flex-col items-center justify-center gap-1 text-black">
            <div className="rounded-xl text-gray-900 transition-all duration-300">
              <svg
                data-s29k="true"
                data-qa="bookmark"
                aria-hidden="true"
                viewBox="0 0 20 20"
                className="shrink-0 transition-all duration-300 text-black h-6 w-6"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M4.25 4.25A2.75 2.75 0 0 1 7 1.5h6a2.75 2.75 0 0 1 2.75 2.75v12.793c0 1.114-1.346 1.671-2.134.884L10 14.31l-3.616 3.616c-.788.787-2.134.23-2.134-.884zM7 3c-.69 0-1.25.56-1.25 1.25v12.19l3.649-3.65a.85.85 0 0 1 1.202 0l3.649 3.65V4.25C14.25 3.56 13.69 3 13 3z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <span className="text-[10px] text-gray-900">Shortlist</span>
          </div>
        </li>
        <li className="relative">
          <div className="group flex aspect-square w-full cursor-pointer flex-col items-center justify-center gap-1 text-black">
            <div className="rounded-xl text-gray-900 transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="shrink-0 transition-all duration-300 text-black h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                ></path>
              </svg>
            </div>
            <span className="text-[10px] text-gray-900">Team</span>
          </div>
        </li>
        <li className="relative">
          <div className="group flex aspect-square w-full cursor-pointer flex-col items-center justify-center gap-1 text-black">
            <div className="rounded-xl text-gray-900 transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="shrink-0 transition-all duration-300 text-black h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                ></path>
              </svg>
            </div>
            <span className="text-[10px] text-gray-900">Spend</span>
          </div>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
