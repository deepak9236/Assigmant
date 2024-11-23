import React from "react";

const ProfileCard = ({
  name,
  experience,
  bio,
  skills,
  profileUrl,
  commitment,
}) => {
  return (
    <li className="group relative flex cursor-pointer gap-x-2 rounded-lg ring-1 p-5 ring-gray-200 hover:ring-indigo-600 bg-white">
      <div className="relative w-full">
        <div className="h-full w-full gap-x-4 transition-all duration-300">
          <section className="flex h-full flex-col justify-between gap-3">
            <section className="flex flex-col gap-3">
              <div className="flex">
                <div className="flex max-w-full flex-1 items-center gap-2">
                  <div className="relative flex flex-1 items-center gap-2 truncate">
                    <span className="relative inline-block flex-none overflow-hidden border border-gray-300 rounded-xl bg-white h-12 min-w-12 max-w-12 w-12">
                      {/* Placeholder for Profile Picture */}
                      <img
                        alt="Profile Picture"
                        className="h-full w-full object-cover"
                        src={profileUrl}
                      />
                    </span>
                    <div className="relative flex flex-col">
                      <p className="flex w-full items-center overflow-hidden text-ellipsis whitespace-nowrap pr-4 text-base font-medium text-gray-900">
                        <span className="truncate">{name}</span>
                        <span className="mx-2 h-4 w-0.5 flex-shrink-0 rounded-full bg-gray-700"></span>
                        <span className="flex-shrink-0">Exp: {experience}</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end md:w-[120px]">
                    <a
                      href={profileUrl}
                      className="relative flex w-fit flex-none overflow-hidden whitespace-nowrap rounded-xl bg-indigo-600 px-2 py-1.5 text-left text-sm font-semibold text-white shadow-none"
                    >
                      <span className="hidden md:inline-block">
                        View profile&nbsp;&nbsp;
                      </span>
                      <span className="transition-all group-hover:ml-0 md:ml-2">
                        {" "}
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <p className="mb-0 min-h-[10px] whitespace-pre-wrap text-sm text-gray-600">
                {bio}
              </p>
            </section>
            <section className="flex items-start justify-between gap-5">
              <section className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Expert in</span>
                </div>
                <div className="flex max-h-[30px] w-full flex-wrap items-center gap-2 overflow-hidden">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="inline-flex select-none items-center gap-x-2 whitespace-nowrap rounded-xl bg-indigo-50 px-2 py-1.5 text-xs font-normal text-indigo-600"
                    >
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </section>
              <section className="flex flex-col justify-end gap-2">
                <h3 className="truncate text-right text-sm font-medium tracking-tight">
                  Commitment
                </h3>
                <div className="flex items-center justify-end gap-2">
                  {commitment.map((commitmentType, index) => (
                    <span
                      key={index}
                      className="inline-flex select-none items-center gap-x-2 whitespace-nowrap rounded-xl bg-gray-100 px-2 py-1.5 text-xs font-normal text-black"
                    >
                      {commitmentType}
                    </span>
                  ))}
                </div>
              </section>
            </section>
          </section>
        </div>
      </div>
    </li>
  );
};

export default ProfileCard;
