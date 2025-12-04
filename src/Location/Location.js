import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { GoogleMap, Marker } from "@react-google-maps/api"

export default function Location({ isMobile, currentUser, setSelectedAddress }) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeMap, setActiveMap] = useState(false);

  useEffect(() => {

    const addressBtns = document.querySelectorAll(".addressBtns .addressBtn");

    addressBtns.forEach((item, i) => {
      item.addEventListener("click", () => {
        addressBtns.forEach((prevs) => {
          prevs.classList.remove("active");
        });

        item.classList.add("active");
      });
    });
    
  }, []);

  const buttons = [
    {
      label: t("home_label"),
      svg: (
        <svg
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22 23.48"
        >
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <g className="cls-1">
                <path
                  d="M11,0c2.53,0,11,8.11,11,10.87v7.62a4.81,4.81,0,0,1-4.58,5H4.58a4.81,4.81,0,0,1-4.58-5V10.87C0,8.11,8.47,0,11,0Zm0,2A7.62,7.62,0,0,0,9.14,3.11,29.73,29.73,0,0,0,5.92,5.86C3.16,8.55,2.1,10.4,2,10.91v7.58a2.82,2.82,0,0,0,2.58,3H17.42a2.82,2.82,0,0,0,2.58-3V10.91c-.1-.5-1.16-2.35-3.92-5a29.73,29.73,0,0,0-3.22-2.75A7.62,7.62,0,0,0,11,2"
                  fill="currentColor"
                ></path>
                <path
                  d="M8,22.48v-6a3,3,0,1,1,6,0v6Z"
                  fill="currentColor"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      ),
    },
    {
      label: t("work_label"),
      svg: (
        <svg
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18 18"
        >
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <path
                d="M14.25,6.75A.75.75,0,1,0,15,7.5.75.75,0,0,0,14.25,6.75Zm0,6a.75.75,0,1,0,.75.75A.75.75,0,0,0,14.25,12.75Zm0-3a.75.75,0,1,0,.75.75A.75.75,0,0,0,14.25,9.75ZM16.5,7.5a2.25,2.25,0,0,0-2.25-2.25H12V16.5h2.25a2.25,2.25,0,0,0,2.25-2.25Zm-12.75,9H10.5V3.75A2.25,2.25,0,0,0,8.25,1.5H3.75A2.25,2.25,0,0,0,1.5,3.75v10.5A2.25,2.25,0,0,0,3.75,16.5ZM18,7.5v6.75A3.75,3.75,0,0,1,14.25,18H3.75A3.75,3.75,0,0,1,0,14.25V3.75A3.75,3.75,0,0,1,3.75,0h4.5A3.75,3.75,0,0,1,12,3.75h2.25A3.75,3.75,0,0,1,18,7.5ZM8.25,6.75H7.5a.75.75,0,0,0,0,1.5h.75a.75.75,0,0,0,0-1.5Zm-3.75,0H3.75a.75.75,0,0,0,0,1.5H4.5a.75.75,0,0,0,0-1.5Zm3.75-3H7.5a.75.75,0,0,0,0,1.5h.75a.75.75,0,0,0,0-1.5Zm-3.75,0H3.75a.75.75,0,0,0,0,1.5H4.5a.75.75,0,0,0,0-1.5Zm3.75,9H7.5a.75.75,0,0,0,0,1.5h.75a.75.75,0,0,0,0-1.5Zm-3.75,0H3.75a.75.75,0,0,0,0,1.5H4.5a.75.75,0,0,0,0-1.5Zm3.75-3H7.5a.75.75,0,0,0,0,1.5h.75a.75.75,0,0,0,0-1.5Zm-3,.75a.75.75,0,0,1-.75.75H3.75a.75.75,0,0,1,0-1.5H4.5A.75.75,0,0,1,5.25,10.5Z"
                fill="currentColor"
              />
            </g>
          </g>
        </svg>
      ),
    },
    {
      label: t("other_label"),
      svg: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <section
        className="w-full h-[100vh] bg-white 
            flex"
      >
        {isMobile ? (
          <div
            className="w-full h-[60px] hidden absolute top-0 left-0 shadow-md
                                  justify-center items-center max-md:flex bg-white 
                                  [body.dark_&]:bg-[#2e2e2e]"
          >
            <button
              className="w-[40px] h-[40px] flex items-center justify-center
                             outline-none absolute left-5
                            cursor-pointer"
              onClick={() => navigate(-1)}
            >
              <img
                src="https://pizza-hut.am/assets/images/app_2/arrow.svg"
                className="w-[20px] h-[20px]"
              />
            </button>

            <h2
              className="text-[17px] text-[#515151] font-[600] 
            uppercase [body.dark_&]:text-white"
            >
              Select Address
            </h2>
          </div>
        ) : (
          ""
        )}

        <div
          className={`hidden max-md:flex w-full p-[4vw] flex 
          flex-col relative mt-[60px] ${activeMap ? "max-md:hidden" : ""} 
          [body.dark_&]:bg-[#2e2e2e]`}
        >
          <h2
            className="text-[calc(16px+.3vw)] 
            font-[600] [body.dark_&]:text-white
          "
          >
            {t("add_address")}
          </h2>

          <p className="text-[calc(12px+.3vw)] text-[#9d9d9d]">
            {t("street_name_building_number")}
            <b className="text-[#e33b41]"> *</b>
          </p>

          <div
            className="w-full p-[10px] rounded-[15px] 
          border-1 border-[#ebebeb] mt-10"
          >
            <input
              type="text"
              placeholder={t("enter_street_and_building")}
              className="w-full text-[calc(14px+.3vw)] outline-none 
              border-none [body.dark_&]:text-white"
            />
          </div>

          <button
            className="pb-[15px] flex border-b-1 
            border-[#ebebeb] h-[70px] mt-5 outline-none"
            onClick={() => setActiveMap(true)}
          >
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="32" cy="32" r="30" fill="#FCE6E6" />

              <path d="M32 15 L38 33 L32 30 L26 33 Z" fill="#E64A4A" />
            </svg>

            <p
              className="text-[calc(14px+.3vw)] text-[#515151] 
              font-[600] ml-1 [body.dark_&]:text-white"
            >
              {t("current_address")}
            </p>
          </button>

          <button
            className="w-full absolute bottom-0 left-0 
            bg-[#e33b411a] flex items-center justify-center gap-2 p-[15px]"
            onClick={() => setActiveMap(true)}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z"
                stroke="#e33b41"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="9" r="3" stroke="#e33b41" strokeWidth="2" />
            </svg>

            <p className="uppercase text-[#e33b41] text-[calc(14px+.3vw)]">
              {t("use_map_pin")}
            </p>
          </button>
        </div>

        <div
          className="w-[50%] h-full 
                bg-white max-md:w-full p-[4vw] 
                flex flex-col max-md:hidden 
                [body.dark_&]:bg-[#2e2e2e]"
        >
          <span className="flex gap-5">
            <Link
              to="/"
              className="text-[calc(10px+.3vw)] [body.dark_&]:text-white"
            >
              {t("main_page")}
            </Link>

            <img
              src="https://pizza-hut.am/assets/images/app_2/arrow.svg"
              className="w-[6px] rotate-[180deg]"
            />

            <Link
              to="/basket"
              className="text-[calc(10px+.3vw)] [body.dark_&]:text-white"
            >
              {t("basket")}
            </Link>

            <img
              src="https://pizza-hut.am/assets/images/app_2/arrow.svg"
              className="w-[6px] rotate-[180deg]"
            />

            <Link
              className="text-[calc(10px+.3vw)] 
                        text-[#e33b41] cursor-default 
                        [body.dark_&]:text-[#9d9d9d]"
            >
              {t("add_address")}
            </Link>
          </span>

          <h2
            className="text-[calc(18px+.3vw)] uppercase text-[#515151] 
                        mt-12 [body.dark_&]:text-white"
          >
            {t("add_address")}
          </h2>

          <div className="w-full flex gap-5 items-center mt-3 addressBtns">
            <button
              className="addressBtn w-full px-[15px] py-[10px] 
                         border-1 border-[#ebebeb] text-[calc(14px+.3vw)] 
                        text-[#9d9d9d] rounded-[12px] cursor-pointer 
                        active [.active]:bg-[rgba(36,115,213,.1)] 
                        [.active]:border-[#ce4a57] [.active]:text-[#ce4a57] 
                        [body.dark_&]:text-[#9d9d9d] [.active]:[body.dark_&]:text-[#ce4a57] 
                        [body.dark_&]:border-[#9d9d9d] [.active]:[body.dark_&]:border-[#ce4a57]"
            >
              {t("search_by_address")}
            </button>

            <p className="uppercase [body.dark_&]:text-white">{t("or_text")}</p>

            <button
              className="addressBtn w-full px-[15px] py-[10px] 
                         border-1 border-[#ebebeb] text-[calc(14px+.3vw)] 
                        text-[#9d9d9d] rounded-[12px] cursor-pointer 
                        [.active]:bg-[rgba(36,115,213,.1)] 
                        [.active]:border-[#ce4a57] [.active]:text-[#ce4a57] 
                        [body.dark_&]:text-[#9d9d9d] [.active]:[body.dark_&]:text-[#ce4a57] 
                        [body.dark_&]:border-[#9d9d9d] [.active]:[body.dark_&]:border-[#ce4a57]"
            >
              {t("mark_on_map")}
            </button>
          </div>

          <div
            className="p-[15px] 
                         border-1 border-[#ebebeb]  
                         rounded-[12px] mt-4 
                         [body.dark_&]:border-[#565656]"
          >
            <input
              type="text"
              placeholder={t("enter_street_and_building")}
              className="w-full text-[calc(10px+.3vw)] 
                            border-none outline-none 
                             [body.dark_&]:text-white"
            />
          </div>

          <label
            className="text-[calc(10px+.3vw)] 
           text-[#515151] mt-7 [body.dark_&]:text-white"
          >
            {t("additional_instructions_for_courier")}
          </label>

          <textarea
            className="px-[15px] py-[10px] 
                         border-1 border-[#ebebeb] 
                         outline-none rounded-[12px] 
                         text-[calc(10px+.3vw)] min-h-[100px] 
                         mt-2 [body.dark_&]:border-[#565656] 
                          [body.dark_&]:text-white"
            placeholder={t("additional_instructions_placeholder")}
          ></textarea>

          <ul className="flex gap-3 w-full mt-5">
            {buttons.map((btn, index) => (
              <li key={index} className="w-full">
                <button
                  onClick={() => setActiveIndex(index)}
                  className={`w-full gap-2 flex justify-center items-center p-[8px] rounded-[12px] border border-[#ebebeb] cursor-pointer
                  ${
                    activeIndex === index
                      ? "bg-[#e33b411a] border-none text-[#ce4a57]"
                      : "bg-white text-[#515151] [body.dark_&]:bg-[#2e2e2e]"
                  }
                  transition-colors duration-300`}
                >
                  <span
                    className={`text-current transition-colors duration-300`}
                  >
                    {btn.svg}
                  </span>
                  <p
                    className={`text-[calc(10px+.3vw)] font-medium transition-colors duration-300 
                      [body.dark_&]:text-white`}
                  >
                    {btn.label}
                  </p>
                </button>
              </li>
            ))}
          </ul>

          <div className="w-full flex gap-3 mt-12">
            <button
              className="w-full p-[15px] border-1 
                border-[#ce4a57] text-[#ce4a57] cursor-pointer 
                flex items-center justify-center 
                rounded-[15px]"
              onClick={() => {
                navigate(-1);
              }}
            >
              {t("close")}
            </button>

            <button
              className="w-full p-[15px] 
                bg-[#ce4a57] text-white cursor-default 
                flex items-center justify-center 
                rounded-[15px] opacity-75"
            >
              {t("save")}
            </button>
          </div>
        </div>

        <div
          className={`w-[50%] h-full max-md:w-full  
          ${activeMap ? "" : "max-md:hidden"}`}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1563416.714472416!2d43.71882285162848!3d40.06318082537997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40155684e773bac7%3A0xd0b4757aeb822d23!2z0JDRgNC80LXQvdC40Y8!5e0!3m2!1sru!2sam!4v1764513359243!5m2!1sru!2sam"
            width="100%"
            height="100%"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}
