import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import LanguageBar from "../LanguageBar/LanguageBar";
import FeedbackMenuBar from "../FeedbackMenuBar/FeedbackMenuBar";
import { useTranslation } from "react-i18next";

function HeaderMenu({ isMobile, currentUser }) {
  const navigate = useNavigate();

  const [language, setLanguage] = useState("en");

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

  const openLanguageBar = () => {
    const body = document.querySelector("body");

    if (!body.classList.contains("languageActive")) {
      body.classList.add("languageActive");
    } else {
      body.classList.remove("languageActive");
    }
  };

  const openMenuBar = () => {
    const body = document.querySelector("body");

    if (!body.classList.contains("menuActive")) {
      body.classList.add("menuActive");
    } else {
      body.classList.remove("menuActive");
    }
  };

  const { t } = useTranslation();

  return (
    <>
      <header
        className="w-full h-[80px] flex items-center justify-between px-[3vw] fixed
               top-0 bg-[#FFF] z-[100] max-md:shadow-md max-md:h-[60px]
                [body.dark_&]:bg-[#2e2e2e]"
      >
        <div
          className="w-auto h-full flex gap-2 items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src="https://bonee.blob.core.windows.net/images/b2167a89-02a4-2b85-b68b-efbdc4238980_1.png"
            className="w-[40px] h-[40px]"
            alt="pizza hut log"
          />

          <div className="flex-col gap-[-10px]">
            <p
              className="text-[calc(10px+.3vw)] text-[#9d9d9d] 
                      font-[700] leading-[19px]"
            >
              Welcome to
            </p>

            <h2
              className="text-[calc(14px+.3vw)] 
                      text-[#e33b41] font-[600] leading-[19px]
                       max-lg:text-[17px]"
            >
              Pizza Hut Armenia {isMobile ? "..." : "Menu"}
            </h2>
          </div>
        </div>

        <button
          className="w-[130px] h-[36px] bg-[#e33b41] 
                  rounded-lg flex justify-center
                  items-center gap-2 text-[14px]
                   font-sans-serif hover:opacity-80 
                   text-white cursor-pointer max-md:hidden "
        >
          <img
            src="https://pizza-hut.am/assets/images/app_2/delivery.svg"
            className="w-[20px] h-[20px]"
            alt=""
          />

          <p
            className="text-[15px] font-sans 
                    max-lg:text-[13px] uppercase"
          >
            {t("delivery")}
          </p>
        </button>

        <div className="w-auto h-full flex items-center gap-4 max-md:gap-3">
          <button
            className={`w-[60px] h-[26px] flex ${
              modeValue ? "flex-row-reverse" : "flex-row"
            } 
                      items-center gap-[3px] rounded-full border-1 border-[#e7e7e7ff] px-[3px] 
                      cursor-pointer max-md:hidden [body.dark_&]:border-[#464646]`}
            onClick={callDarkAndLightMode}
          >
            <span
              className="w-[21px] h-[21px] shrink-0 block 
                        rounded-full bg-[#e33b41]"
            />

            <p className="text-[9px] font-[700] text-[#9d9d9d] leading-[10px]">
              {modeValue ? "Dark Mode" : "Light Mode"}
            </p>
          </button>

          <button
            className="w-auto h-auto cursor-pointer 
                        max-md:hidden shadow-md"
            onClick={openLanguageBar}
          >
            <img
              src={
                language === "en"
                  ? "https://bonee.blob.core.windows.net/languages/icons/us.png"
                  : language === "ru"
                  ? "https://bonee.blob.core.windows.net/languages/icons/ru.png"
                  : language === "am"
                  ? "	https://bonee.blob.core.windows.net/languages/icons/arm.png"
                  : ""
              }
              className="w-[30px] h-[18px]"
              alt=""
            />
          </button>

          {currentUser ? (
            <button
              className="w-[22px] h-[22px]
                                cursor-pointer max-md:hidden"
              onClick={() => navigate("/profile/orders")}
            >
              <img
                src="https://pizza-hut.am/assets/images/app_2/ordersHistory.svg"
                className="w-[22px] h-[22px]"
              />
            </button>
          ) : (
            ""
          )}

          {currentUser ? (
            <button
              className="hidden w-[40px] h-[40px] items-center justify-center
                                cursor-pointer rounded-xl bg-transparent border border-1
                                border-gray-200 max-md:flex"
              onClick={() => navigate("/profile/orders")}
            >
              <img
                src="https://pizza-hut.am/assets/images/app_2/ordersHistory.svg"
                className="w-[22px] h-[22px]"
              />
            </button>
          ) : (
            ""
          )}

          <button
            className="hidden w-[40px] h-[40px] items-center justify-center
                        cursor-pointer rounded-xl bg-transparent border border-1 
                        border-gray-200 max-md:flex"
            onClick={openLanguageBar}
          >
            <img
              src={
                language === "en"
                  ? "https://bonee.blob.core.windows.net/languages/icons/us.png"
                  : language === "ru"
                  ? "https://bonee.blob.core.windows.net/languages/icons/ru.png"
                  : language === "am"
                  ? "	https://bonee.blob.core.windows.net/languages/icons/arm.png"
                  : ""
              }
              className="w-[30px] h-[18px]"
              alt=""
            />
          </button>

          <button
            className="w-auto h-auto cursor-pointer max-md:hidden"
            onClick={() => {
              currentUser ? navigate("/profile/profile") : navigate("/signIn");
            }}
          >
            {currentUser ? (
              <svg
                width="27px"
                height="27px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V19C4 19.55 4.45 20 5 20H19C19.55 20 20 19.55 20 19V18C20 15.34 14.67 14 12 14Z"
                  fill="#E53935"
                />
              </svg>
            ) : (
              <img
                src="https://pizza-hut.am/assets/images/app_2/user.svg"
                className="w-[22px] h-[22px]"
              />
            )}
          </button>

          <button
            className="w-auto h-auto cursor-pointer
                         relative after:content-['0'] after:absolute
                          after:right-[-5px] after:top-[-5px] after:w-[20px] after:h-[20px]
                          after:rounded-full after:bg-[#e33b41] after:flex after:justify-center
                           after:items-center after:text-white max-md:hidden"
            onClick={() => navigate("/basket")}
          >
            <img
              src="https://bonee.blob.core.windows.net/company-type/Assets/basket.svg"
              className="w-[25px] h-[25px]"
              alt=""
            />
          </button>

          <button
            className="hidden w-[40px] h-[40px] items-center justify-center
                            cursor-pointer rounded-xl bg-[#e33b41] max-md:flex"
            onClick={() => navigate("/search")}
          >
            <img
              src="https://pizza-hut.am/assets/images/app_2/searchWhite.svg"
              className="w-[22px] h-[22px]"
            />
          </button>

          <button
            className="hidden w-[40px] h-[40px] items-center
                        justify-center
                        cursor-pointer rounded-xl bg-[#e33b41] max-md:flex"
            onClick={openMenuBar}
          >
            <img
              src="https://www.pizza-hut.am/assets/images/app_2/burger-iconWhite.svg"
              className="w-[22px] h-[22px]"
            />
          </button>

          <button
            className="w-[40px] h-[40px] flex items-center justify-center
                        cursor-pointer rounded-md max-md:hidden"
            onClick={openMenuBar}
          >
            <img
              src="https://pizza-hut.am/assets/images/app_2/burger-icon.svg"
              className="w-[22px] h-[22px]"
              alt=""
            />
          </button>
        </div>
      </header>

      <LanguageBar setLanguage={setLanguage} />
      <FeedbackMenuBar />
    </>
  );
}

export default HeaderMenu;
