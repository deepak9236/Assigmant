import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  const navItems = [
    {
      name: "Search",
      path: "/search",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          aria-hidden="true"
          role="presentation"
          focusable="false"
          className="h-6 w-6 shrink-0 transition-all duration-300 group-hover:scale-110"
          style={{
            display: "block",
            height: "20px",
            width: "20px",
            padding: "0.5px",
            stroke: "currentColor",
            strokeWidth: "4.5",
          }}
        >
          <path
            fill="transparent"
            d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"
          />
        </svg>
      ),
    },
    {
      name: "Shortlist",
      path: "/shortlist",
      icon: (
        <svg
          data-s29k="true"
          data-qa="bookmark"
          aria-hidden="true"
          viewBox="0 0 20 20"
          className="h-6 w-6 shrink-0 transition-all duration-300 group-hover:scale-110"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M4.25 4.25A2.75 2.75 0 0 1 7 1.5h6a2.75 2.75 0 0 1 2.75 2.75v12.793c0 1.114-1.346 1.671-2.134.884L10 14.31l-3.616 3.616c-.788.787-2.134.23-2.134-.884zM7 3c-.69 0-1.25.56-1.25 1.25v12.19l3.649-3.65a.85.85 0 0 1 1.202 0l3.649 3.65V4.25C14.25 3.56 13.69 3 13 3z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Team",
      path: "/team",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
          className="h-6 w-6 shrink-0 transition-all duration-300 group-hover:scale-110"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="hidden h-screen sm:sticky sm:top-0 sm:z-20 sm:flex sm:flex-col">
      <div className="flex w-20 grow flex-col overflow-x-visible border-r border-gray-200 bg-white px-3">
        <nav className="mt-4 flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col items-center gap-y-5">
            {/* Logo */}
            <li>
              <Link
                className="flex w-20 max-w-[50px] shrink-0 items-center rounded-xl border border-gray-300 bg-white"
                to="/"
              >
                <div className="w-20">
                  <img src="/icon.svg" alt="logo" />
                </div>
              </Link>
            </li>

            {/* Navigation Items */}
            <li>
              <ul role="list" className="space-y-5">
                {navItems.map((item) => (
                  <li key={item.name} className="relative">
                    <Link to={item.path}>
                      <div className="group flex aspect-square w-full cursor-pointer flex-col items-center justify-center text-black">
                        <div
                          className={`rounded-xl p-2 text-gray-900 transition-all duration-300 group-hover:bg-indigo-50 group-hover:text-indigo-600 ${
                            isActiveRoute(item.path)
                              ? "bg-indigo-50 text-indigo-600"
                              : ""
                          }`}
                        >
                          {React.cloneElement(item.icon, {
                            className: `${item.icon.props.className} ${
                              isActiveRoute(item.path)
                                ? "text-indigo-600"
                                : "text-black group-hover:text-indigo-600"
                            }`,
                          })}
                        </div>
                        <span className="text-[10px]">{item.name}</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Spend */}
            <li className="relative">
              <Link to="#">
                <div className="group flex aspect-square w-full cursor-pointer flex-col items-center justify-center gap-1 text-black">
                  <div className={`rounded-xl text-gray-900 transition-all duration-300 ${
                    isActiveRoute("/spend") ? "text-indigo-600" : ""
                  }`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className={`h-6 w-6 shrink-0 transition-all duration-300 ${
                        isActiveRoute("/spend")
                          ? "text-indigo-600"
                          : "text-black group-hover:text-indigo-600"
                      }`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                      />
                    </svg>
                  </div>
                  <span className="text-[10px] text-gray-900">Spend</span>
                </div>
              </Link>
            </li>

            {/* Settings */}
            <li className="relative" aria-label="Please login first">
              <Link to="#">
                <div className="group flex aspect-square w-full cursor-pointer flex-col items-center justify-center text-black">
                  <div className={`rounded-xl p-2 text-gray-900 transition-all duration-300 group-hover:bg-indigo-50 group-hover:text-indigo-600 ${
                    isActiveRoute("/settings") ? "bg-indigo-50 text-indigo-600" : ""
                  }`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className={`h-6 w-6 shrink-0 transition-all duration-300 group-hover:scale-110 ${
                        isActiveRoute("/settings")
                          ? "text-indigo-600"
                          : "text-black group-hover:text-indigo-600"
                      }`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </div>
                  <span className="text-[10px]">Settings</span>
                </div>
              </Link>
            </li>

            {/* User Section */}
            <li className="mb-3 mt-auto">
              <ul className="flex flex-col items-center space-y-3">
                {/* cal */}
                <a href="https://calendly.com/deepakpaswan8321/30min">
                  <li
                    class="group grid h-10 w-10 cursor-pointer place-items-center rounded-full bg-gray-100 duration-300 hover:scale-110 hover:bg-indigo-50"
                    aria-label="Schedule a meeting"
                    sx="[object Object]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      class="h-6 w-6 text-gray-900 duration-300 group-hover:text-indigo-600"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                      ></path>
                    </svg>
                  </li>
                </a>
                {/* Profile */}
                <li className="grid w-full place-items-center">
                  <div className="flex cursor-pointer items-center">
                    <span className="sr-only">Open user menu</span>
                    <span className="relative inline-block flex-none overflow-hidden border border-gray-300 rounded-xl bg-white h-[40px] min-w-[40px] w-[40px]">
                      <svg
                        className="h-full w-full text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"></path>
                      </svg>
                    </span>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
