import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

function MobileMenu({ currentUser, basketProducts }) {
  const navigate = useNavigate();

  const menuItems = document.querySelectorAll("footer .menuItem");
  const [changingDinIn, setChangingDinIn] = useState(false);
  const [active, setActive] = useState(null);
  const [dineIn, setDineIn] = useState(() => {

    if(localStorage.getItem("dine_in")) {
      return localStorage.getItem("dine_in");
    } else {
      return "delivery"
    }
    
  });

  useEffect(() => {
    localStorage.setItem("dine_in", dineIn);
    
    if(dineIn !== "delivery") {
      setChangingDinIn(true);
    }

  }, [dineIn]);

  menuItems.forEach((elem) => {
    elem.addEventListener("click", () => {
      elem.classList.add("activated");
    });
  });

  const { t } = useTranslation();

  return (
    <>
      {
        changingDinIn 
        ? 
          (
            <div className="hidden fixed inset-0 z-[150] bg-black/40 
                items-center justify-center max-md:flex p-2"
            >
              
              <div className="w-full flex flex-col relative 
              bg-white rounded-[30px] p-[15px]">
                  <button
                    className="w-[40px] h-[40px] flex items-center justify-center
                                border-1 border-gray-200 rounded-xl outline-none absolute left-5
                                cursor-pointer"
                    onClick={() => setChangingDinIn(false)}
                  >
                    <img
                      src="https://pizza-hut.am/assets/images/app_2/close.svg"
                      className="w-[30%]"
                    />
                  </button>
              </div>

            </div>
          )
        :
        ''
      }

      {active ? (
        <div
          className="hidden fixed inset-0 z-[100] bg-black/40 
            items-center justify-center max-md:flex"
        ></div>
      ) : (
        ""
      )}

      <footer
        className="bg-white hidden items-center justify-around 
            fixed z-[110] w-full h-auto
             absolute bottom-0 max-md:flex bg-white p-2 
             [body.dark_&]:bg-[#2e2e2e] shadow-[0_0_14px_rgba(0,0,0,0.3)]"
      >
        <button
          className="flex flex-col gap-1 justify-center 
                        items-center cursor-pointer menuItem"
          onClick={() => navigate("/")}
        >
          <img
            src="https://www.pizza-hut.am/assets/images/app_2/home.svg"
            className="w-[27px] h-[27px]"
            alt=""
          />
          <p
            className="uppercase text-[#515151] text-[calc(20px-.3vw)]
                         [body.dark_&]:text-white max-sm:text-[calc(15px-.3vw)] 
                         [.menuItem.activated_&]:text-[#e33b41]"
          >
            {t("home")}
          </p>
        </button>

        <button
          className="flex flex-col gap-1 justify-center 
                        items-center cursor-pointer mr-3 menuItem 
                        mr-10"
          onClick={() => navigate("/about-us")}
        >
          <img
            src="https://www.pizza-hut.am/assets/images/app_2/aboutUs.svg"
            className="w-[27px] h-[27px]"
            alt=""
          />
          <p
            className="uppercase text-[#515151] text-[calc(20px-.3vw)]
                          [body.dark_&]:text-white max-sm:text-[calc(15px-.3vw)] 
                         [.menuItem.activated_&]:text-[#e33b41]"
          >
            {t("about_us")}
          </p>
        </button>

        <div
          className="w-[19vw] flex flex-col absolute bottom-10 
          gap-2"
        >
          <button
            onClick={() => {
              setDineIn("dine")
              setActive(!active)
            }}
            className={`
              w-[19vw] h-[19vw] flex flex-col gap-1 items-center justify-center
              rounded-full shadow-md cursor-pointer absolute bottom-0
              bg-[#e33b41] transition-all duration-300
              ${
                dineIn === "delivery"
                  ? active ? "bottom-[16vh] z-20" : "bottom-[0]"
                  : "bottom-[0] z-30 shadow-lg"
              }
          `}
          >
            <img
              src="https://pizza-hut.am/assets/images/app_2/dineIN.svg"
              className="w-[6vh] h-[6vh]"
              alt=""
            />
            <p className="text-[2vw] text-white font-[600] uppercase">
              DINE-IN
            </p>
          </button>

          <button
            onClick={() => {
              setDineIn("delivery")
              setActive(!active)
            }}
            className={`
              w-[19vw] h-[19vw] flex flex-col gap-1 items-center justify-center
              rounded-full shadow-md cursor-pointer absolute bottom-0
              bg-blue-500 transition-all duration-300
              ${
                dineIn === "delivery"
                  ? "bottom-[0] z-30 shadow-lg"
                  : active ? "bottom-[16vh] z-20" : "bottom-[0]"
              }
          `}
          >
            <img
              src="https://www.pizza-hut.am/assets/images/app_2/delivery.svg"
              className="w-[50%] h-[45%]"
              alt=""
            />
            <p className="text-[2vw] text-white font-[600] uppercase">
              {t("delivery")}
            </p>
          </button>
        </div>

        <button
          className="flex flex-col gap-1 justify-center items-center cursor-pointer 
          ml-10"
          onClick={() => navigate("/basket")}
        >
          <span
            className={`w-[27px] h-[27px] relative 
                    after:content-['${ 
                      basketProducts?.length === undefined 
                      ? 0 
                      : basketProducts?.length
                    }']
                    after:absolute
                    after:w-[17px] after:h-[17px]
                    after:flex after:justify-center after:items-center after:text-[#515151]
                    after:text-[11px] after:top-[-7px] after:right-[-5px] 
                    [body.dark_&]:after:text-white menuItem`}
          >
            <img
              src="https://bonee.blob.core.windows.net/company-type/Assets/basket.svg"
              className="w-full h-full"
              alt=""
            />
          </span>

          <p
            className="uppercase text-[#515151] text-[calc(20px-.3vw)]
                        [body.dark_&]:text-white max-sm:text-[calc(15px-.3vw)] 
                         [.menuItem.activated_&]:text-[#e33b41]"
          >
            {t("basket")}
          </p>
        </button>

        <button
          className="flex flex-col gap-1 justify-center 
                    items-center cursor-pointer menuItem"
          onClick={() => {
            currentUser ? navigate("/profile/profile") : navigate("/signIn");
          }}
        >
          {currentUser ? (
            <svg
              width="27"
              height="27"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="24" cy="14" r="10" fill="#E74C3C" />
              <path
                d="M24 28C14 28 6 34 6 42H42C42 34 34 28 24 28Z"
                fill="#E74C3C"
              />
            </svg>
          ) : (
            <img
              src="https://www.pizza-hut.am/assets/images/app_2/user.svg"
              className="w-[27px] h-[27px]"
              alt=""
            />
          )}
          <p
            className={`uppercase text-[#515151] text-[calc(20px-.3vw)]
                             [body.dark_&]:text-white max-sm:text-[calc(15px-.3vw)] 
                            ${currentUser ? "text-[#e33b41]" : ""}`}
          >
            {currentUser ? t("profile") : t("login")}
          </p>
        </button>
      </footer>
    </>
  );
}

export default MobileMenu;
