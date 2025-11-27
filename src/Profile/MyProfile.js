import React, { useEffect, useState } from "react";
import CountrySelect from "../CountrySelect/CountrySelect";
import { useNavigate } from "react-router-dom";

function MyProfile({ currentUser }) {
  const navigate = useNavigate();
  const [formType, setFormType] = useState("information");
  const [isEditing, setIsEditing] = useState(null);

  const [modeValue, setModeValue] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    const body = document.querySelector("body");

    if (modeValue) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }, [modeValue]);

  const callDarkAndLightMode = () => {
    setModeValue((prev) => {
      localStorage.setItem("darkMode", !prev);
      return !prev;
    });
  };

  return (
    <>
      <div className="w-full pl-[5vw] pt-4 max-md:pl-0 max-md:pt-0">
        <div className="w-full flex justify-between max-md:hidden">
          <div className="flex flex-col gap-2">
            <p className="text-[#9D9D9D] text-[calc(14px+.3vw)]">Welcome</p>

            <h2
              className="text-[#515151] text-[calc(16px+.3vw)] font-[600]
                                [body.dark_&]:text-white"
            >
              {currentUser?.name} {currentUser?.surname}
            </h2>
          </div>

          <div>
            <p className="text-[calc(12px + .3vw)] text-[#9D9D9D]">
              {modeValue ? "Light" : "Dark"} Mode
            </p>

            <button
              className="w-[60px] h-[26px] rounded-full bg-transparent
                             border-1 border-[#ebebeb]
                             px-[2px] cursor-pointer [body.dark_&]:border-[#FFF4]"
              onClick={() => callDarkAndLightMode()}
            >
              <span
                className={`w-[22px] h-[22px] block rounded-full
                                 bg-[#e33b41] ${modeValue ? "ml-auto" : ""}`}
              />
            </button>
          </div>
        </div>

        <div className="w-full flex-col mt-12 max-md:mt-0">
          <div className="flex">
            <button
              className={`w-[50%] flex justify-center items-center border-b-2 
                            cursor-pointer pb-2  
                                ${
                                  formType === "information"
                                    ? "border-[#e33b41]"
                                    : "border-[#ebebeb]"
                                }`}
              onClick={() => setFormType("information")}
            >
              <h2
                className={` uppercase text-[calc(14px+.3vw)]
                            font-[600]  
                            ${
                              formType === "information"
                                ? "text-[#e33b41]"
                                : "text-[#515151] [body.dark_&]:text-white"
                            }`}
              >
                Information
              </h2>
            </button>

            <button
              className={`w-[50%] flex justify-center items-center border-b-2 
                                cursor-pointer pb-2  
                                ${
                                  formType === "changePassword"
                                    ? "border-[#e33b41]"
                                    : "border-[#ebebeb]"
                                }`}
              onClick={() => setFormType("changePassword")}
            >
              <h2
                className={` uppercase text-[calc(14px+.3vw)]
                            font-[600]  
                            ${
                              formType === "changePassword"
                                ? "text-[#e33b41]"
                                : "text-[#515151] [body.dark_&]:text-white"
                            }`}
              >
                Change Password
              </h2>
            </button>
          </div>

          {formType === "information" ? (
            <form className="w-full flex flex-col gap-10">
              <div className="w-full flex gap-5 mt-5">
                <div className="w-[50%] flex flex-col">
                  <label
                    className="text-[#515151] text-[calc(10px+.3vw)] font-[600]
                                        uppercase [body.dark_&]:text-white"
                  >
                    Name
                  </label>

                  <div
                    className={`w-full mt-2 flex gap-5 items-center px-3 py-4 rounded-[15px]
                                            border border-1 border-gray-200 max-md:w-full [body.dark_&]:border-[#FFF4] 
                                            ${isEditing ? "border-red-500" : ''}`}
                  >
                    {isEditing ? (
                      <input
                        type="text"
                        className="border-none outline-none w-full
                                         [body.dark_&]:text-white text-[#515151]"
                        maxLength={50}
                      />
                    ) : (
                      <p className="[body.dark_&]:text-white text-[#515151]">
                        {currentUser?.name}
                      </p>
                    )}
                  </div>
                </div>

                <div className="w-[50%] flex flex-col">
                  <label
                    className="text-[#515151] text-[calc(10px+.3vw)] font-[600]
                                        uppercase [body.dark_&]:text-white"
                  >
                    Surname
                  </label>

                  <div
                    className={`w-full mt-2 flex gap-5 items-center px-3 py-4 rounded-[15px]
                                            border border-1 border-gray-200 max-md:w-full [body.dark_&]:border-[#FFF4] 
                                            ${isEditing ? "border-red-500" : ''}`}
                  >
                    {isEditing ? (
                      <input
                        type="text"
                        className="border-none outline-none w-full
                                                    [body.dark_&]:text-white text-[#515151]"
                        maxLength={50}
                      />
                    ) : (
                      <p className="[body.dark_&]:text-white text-[#515151]">
                        {currentUser?.surname}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col">
                <label
                  className="text-[#515151] text-[calc(10px+.3vw)] font-[600]
                                    uppercase [body.dark_&]:text-white"
                >
                  Email
                </label>

                <div
                  className={`w-full mt-2 flex gap-5 items-center px-3 py-4 rounded-[15px]
                                        border border-1 border-gray-200 [body.dark_&]:border-[#FFF4] 
                                        ${isEditing ? "border-red-500" : ''}`}
                >
                  {isEditing ? (
                    <input
                      type="email"
                      className="border-none outline-none w-full
                                            [body.dark_&]:text-white text-[#515151]"
                      maxLength={50}
                    />
                  ) : (
                    <p className="[body.dark_&]:text-white text-[#515151]">
                      {currentUser?.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="w-full flex flex-col">
                <label
                  className="text-[#515151] text-[calc(10px+.3vw)] font-[600]
                                        uppercase [body.dark_&]:text-white"
                >
                  Phone Number
                </label>

                <div className="flex gap-4">
                  <div className="w-[110px] mt-2 pointer-events-none">
                    <CountrySelect />
                  </div>

                  <div className="w-[90%]">
                    <div
                      className={`w-full mt-2 flex gap-5 items-center px-3 py-4 rounded-[15px]
                                            border border-1 border-gray-200 [body.dark_&]:border-[#FFF4] 
                                            ${isEditing ? "border-red-500" : ''}`}
                    >
                      {isEditing ? (
                        <input
                          type="text"
                          className="border-none outline-none w-full
                                                [body.dark_&]:text-white text-[#515151]"
                          maxLength={50}
                        />
                      ) : (
                        <p className="[body.dark_&]:text-white text-[#515151]">
                          {currentUser?.phonenumber}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {isEditing ? (
                <>
                  <div className="flex gap-4">
                    <button
                      type="submit"
                      className="w-full p-[15px] rounded-[15px] bg-[#e33b41]
                                        uppercase text-white mt-2 cursor-pointer
                                        hover:opacity-90"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsEditing(false);
                      }}
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="w-full p-[15px] rounded-[15px] bg-[#e33b41]
                                        uppercase text-white mt-2 cursor-pointer
                                        hover:opacity-90"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsEditing(true);
                      }}
                    >
                      Save
                    </button>
                  </div>
                </>
              ) : (
                <button
                  type="submit"
                  className="w-full p-[15px] rounded-[15px] bg-[#e33b41]
                                        uppercase text-white mt-2 cursor-pointer
                                        hover:opacity-90"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsEditing(true);
                  }}
                >
                  Edit
                </button>
              )}
            </form>
          ) : (
            <form className="w-full mt-5 flex flex-col gap-3">
              <div
                className="w-full mt-2 flex gap-5 items-center px-3 py-4 rounded-[15px]
                                        border border-1 border-gray-200 [body.dark_&]:border-[#FFF4]"
              >
                <input
                  type="text"
                  className="border-none outline-none w-full
                                         [body.dark_&]:text-white text-[#515151]"
                  maxLength={50}
                  placeholder="Old password"
                />
              </div>

              <div
                className="w-full mt-2 flex gap-5 items-center px-3 py-4 rounded-[15px]
                                        border border-1 border-gray-200 [body.dark_&]:border-[#FFF4]"
              >
                <input
                  type="text"
                  className="border-none outline-none w-full
                                         [body.dark_&]:text-white text-[#515151]"
                  maxLength={50}
                  placeholder="New password"
                />
              </div>

              <div
                className="w-full mt-2 flex gap-5 items-center px-3 py-4 rounded-[15px]
                                        border border-1 border-gray-200 [body.dark_&]:border-[#FFF4]"
              >
                <input
                  type="text"
                  className="border-none outline-none w-full
                                         [body.dark_&]:text-white text-[#515151]"
                  maxLength={50}
                  placeholder="Confirm new password"
                />
              </div>

              <button
                type="submit"
                className="w-full p-[15px] rounded-[15px] bg-[#e33b41]
                                        uppercase text-white mt-10 cursor-pointer
                                        opacity-60"
              >
                Change Password
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}

export default MyProfile;
