import React, { useEffect, useState } from "react";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import AboutMenu from "../AboutMenu/AboutMenu";
import { useNavigate, useParams } from "react-router-dom";
import MyProfile from "./MyProfile";
import ProfileHistoryOrders from "./ProfileHistoryOrders";
import ProfileReviews from "./ProfileReviews";
import MyAddress from "./MyAddress";
import ProfileSupport from "./ProfileSupport";
import ProfilePayment from "./ProfilePayment";
import MobileMenu from "../MobileMenuBar/MobileMenu";
import { useTranslation } from "react-i18next";

function Profile({ isMobile, currentUser }) {
  const navigate = useNavigate();

  const [selectedPage, setSelectedPage] = useState(isMobile ? null : true);
  const [selectedPageTitle, setSelectedPageTitle] = useState("");

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const { page } = useParams();

  const [modeValue, setModeValue] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

    const { t } = useTranslation();

  useEffect(() => {
    if (page === "orders") {
      setSelectedPageTitle(t("orders_history"));
    } else if (page === "reviews") {
      setSelectedPageTitle(t("reviews"));
    } else if (page === "profile") {
      setSelectedPageTitle(t("my_profile"));
    } else if (page === "address") {
      setSelectedPageTitle(t("my_address"));
    } else if (page === "paymentMethod") {
      setSelectedPageTitle(t("payment_methods"));
    } else if (page === "support") {
      setSelectedPageTitle(t("support"));
    }
  }, [page, t]);

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
      {isMobile ? (
        ""
      ) : (
        <HeaderMenu isMobile={isMobile} currentUser={currentUser} />
      )}

      <MobileMenu currentUser={currentUser} />

      <section
        className="
                w-full h-auto flex 
                mt-[70px] px-[4vw] max-md:px-4 max-md:pt-5
                pb-[80px]"
      >
        <div
          className={`w-[30%] flex flex-col border-r-1
                        border-[#ebebeb] max-md:w-full [body.dark_&]:border-[#FFF4]
                        max-md:border-none ${
                          selectedPage ? "max-md:hidden" : ""
                        }`}
        >
          {isMobile ? (
            <div
              className="w-full h-[60px] hidden absolute top-0 left-0 shadow-md
                                justify-center items-center max-md:flex"
            >
              <button
                className="w-[40px] h-[40px] flex items-center justify-center
                                border-1 border-gray-200 rounded-xl outline-none absolute left-5
                                cursor-pointer"
                onClick={() => navigate("/")}
              >
                <img
                  src="https://pizza-hut.am/assets/images/app_2/arrow.svg"
                  className="w-[20px] h-[20px]" 
                  alt=""
                />
              </button>

              <h2 className="text-[17px] text-[#515151] font-[600] uppercase [body.dark_&]:text-white">
              {t("profile_page_title")}
              </h2>
            </div>
          ) : (
            ""
          )}

          <span
            className="w-full flex gap-5 items-center
                     mt-10 max-md:hidden"
          >
            <a
              className="text-[16px] text-[#9D9D9D] cursor-pointer
                            [body.dark_&]:text-white"
              onClick={() => navigate("/")}
            >
              {t("main_page")}
            </a>

            <img
              src="https://www.pizza-hut.am/assets/images/app_2/arrow.svg"
              className="w-[6px] rotate-[180deg]"
              alt=""
            />

            <a 
              className="text-[#e33b41] text-[16px]">
              {page?.substring(0, 1).toUpperCase()}
              {page?.substring(1)}
            </a>
          </span>

          <div className="w-full justify-between hidden max-md:flex ">
            <div className="flex flex-col">
              <p className="text-[#9D9D9D] text-[calc(14px+.3vw)]">{t("welcome")}</p>

              <h2
                className="text-[#515151] text-[calc(16px+.3vw)] font-[600]
                                [body.dark_&]:text-white"
              >
                {currentUser?.name} {currentUser?.surname}
              </h2>
            </div>

            <div>
              <p className="text-[calc(12px + .3vw)] text-[#9D9D9D]">
                {modeValue ? t("light") : t("dark")} {t("mode")}
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

          <h2
            className="uppercase text-[#9D9D9D]
                    text-[calc(12px+.3vw)] mt-10 max-md:text-[calc(18px+.3vw)]"
          >
            {t("account")}
          </h2>

          <ul className="mt-2">
            <li
              className="flex justify-between items-center py-[12px] pr-2
                                cursor-pointer border-b-[1px] border-[#ebebeb]
                                 [body.dark_&]:border-[#FFF4] max-md:py-[15px]"
              onClick={() => {
                navigate("/profile/orders");
                setSelectedPage(true);
              }}
            >
              <span className="flex gap-3">
                <img
                  src="https://www.pizza-hut.am/assets/images/app_2/ordersHistory.svg"
                  className="w-[20px] h-[20px]"
                  alt=""
                />

                <p
                  className="uppercase text-[calc(12px+.3vw)]
                                text-[#515151] [body.dark_&]:text-white"
                >
                  {t("orders_history")}
                </p>
              </span>

              <img
                src="https://www.pizza-hut.am/assets/images/app_2/arrowLightGrey.svg"
                className="w-[10px] rotate-[180deg]"
                alt=""
              />
            </li>

            <li
              className="flex justify-between items-center py-[12px] pr-2
                                cursor-pointer border-b-1 border-[#ebebeb]
                                 [body.dark_&]:border-[#FFF4] max-md:py-[15px]"
              onClick={() => {
                navigate("/profile/reviews");
                setSelectedPage(true);
              }}
            >
              <span className="flex gap-3">
                <img
                  src="https://www.pizza-hut.am/assets/images/app_2/reviews.svg"
                  className="w-[20px] h-[20px]"
                  alt=""
                />

                <p
                  className="uppercase text-[calc(12px+.3vw)]
                                 text-[#515151] [body.dark_&]:text-white"
                >
                  {t("reviews")}
                </p>
              </span>

              <img
                src="https://www.pizza-hut.am/assets/images/app_2/arrowLightGrey.svg"
                className="w-[10px] rotate-[180deg]"
                alt=""
              />
            </li>
          </ul>

          <h2
            className="uppercase text-[#9D9D9D]
                    text-[calc(12px+.3vw)] mt-4 max-md:text-[calc(18px+.3vw)]
                    max-md:mt-5"
          >
            {t("personal_information")}
          </h2>

          <ul className="flex flex-col mt-2">
            <li
              className="flex justify-between items-center py-[12px] pr-2
                                cursor-pointer border-b-1 border-[#ebebeb]
                                 [body.dark_&]:border-[#FFF4] max-md:py-[15px]"
              onClick={() => {
                navigate("/profile/profile");
                setSelectedPage(true);
              }}
            >
              <span className="flex gap-3">
                <img
                  src="https://www.pizza-hut.am/assets/images/app_2/myProfile.svg"
                  className="w-[20px] h-[20px]"
                  alt=""
                />

                <p
                  className="uppercase text-[calc(12px+.3vw)]
                                text-[#515151] [body.dark_&]:text-white"
                >
                  {t("my_profile")}
                </p>
              </span>

              <img
                src="https://www.pizza-hut.am/assets/images/app_2/arrowLightGrey.svg"
                className="w-[10px] rotate-[180deg]"
                alt=""
              />
            </li>

            <li
              className="flex justify-between items-center py-[12px] pr-2
                                cursor-pointer border-b-1 border-[#ebebeb]
                                 [body.dark_&]:border-[#FFF4] max-md:py-[15px]"
              onClick={() => {
                navigate("/profile/address");
                setSelectedPage(true);
              }}
            >
              <span className="flex gap-3">
                <img
                  src="https://www.pizza-hut.am/assets/images/app_2/location.svg"
                  className="w-[20px] h-[20px]"
                  alt=""
                />

                <p
                  className="uppercase text-[calc(12px+.3vw)]
                                text-[#515151] [body.dark_&]:text-white"
                >
                  {t("my_address")}
                </p>
              </span>

              <img
                src="https://www.pizza-hut.am/assets/images/app_2/arrowLightGrey.svg"
                className="w-[10px] rotate-[180deg]"
                alt=""
              />
            </li>

            <li
              className="flex justify-between items-center py-[12px]  pr-2
                                cursor-pointer border-b-1 border-[#ebebeb]
                                 [body.dark_&]:border-[#FFF4] max-md:py-[15px]"
              onClick={() => {
                navigate("/profile/paymentMethod");
                setSelectedPage(true);
              }}
            >
              <span className="flex gap-3">
                <img
                  src="https://www.pizza-hut.am/assets/images/app_2/card.svg"
                  className="w-[20px] h-[20px]"
                  alt=""
                />

                <p
                className="uppercase text-[calc(12px+.3vw)]  
                text-[#515151] [body.dark_&]:text-white"
                >
                {t("payment_method")}
                </p>
              </span>

              <img
                src="https://www.pizza-hut.am/assets/images/app_2/arrowLightGrey.svg"
                className="w-[10px] rotate-[180deg]"
                alt=""
              />
            </li>
          </ul>

          <h2
            className="uppercase text-[#9D9D9D]
                    text-[calc(12px+.3vw)] mt-10 max-md:text-[calc(18px+.3vw)]"
          >
            {t("other")}
          </h2>

          <ul className="flex flex-col mt-2">
            <li
              className="flex justify-between items-center py-[12px]  pr-2
                                cursor-pointer border-b-1 border-[#ebebeb]
                                 [body.dark_&]:border-[#FFF4] max-md:py-[15px]"
              onClick={() => {
                navigate("/terms-and-conditions");
                setSelectedPage(true);
              }}
            >
              <span className="flex gap-3">
                <img
                  src="https://www.pizza-hut.am/assets/images/app_2/terms-conditions.svg"
                  className="w-[20px] h-[20px]"
                  alt=""
                />

                <p
                  className="uppercase text-[calc(12px+.3vw)]
                                text-[#515151] [body.dark_&]:text-white"
                >
                  {t("terms_conditions")}
                </p>
              </span>

              <img
                src="https://www.pizza-hut.am/assets/images/app_2/arrowLightGrey.svg"
                className="w-[10px] rotate-[180deg]"
                alt=""
              />
            </li>

            <li
              className="flex justify-between items-center py-[12px]  pr-2
                                cursor-pointer border-b-1 border-[#ebebeb]
                                 [body.dark_&]:border-[#FFF4] max-md:py-[15px]"
              onClick={() => {
                navigate("/privacy-policy");
                setSelectedPage(true);
              }}
            >
              <span className="flex gap-3">
                <img
                  src="https://www.pizza-hut.am/assets/images/app_2/privacyPolicy.svg"
                  className="w-[20px] h-[20px]"
                  alt=""
                />

                <p
                  className="uppercase text-[calc(12px+.3vw)]
                                text-[#515151] [body.dark_&]:text-white"
                >
                  {t("privacy_policy")}
                </p>
              </span>

              <img
                src="https://www.pizza-hut.am/assets/images/app_2/arrowLightGrey.svg"
                className="w-[10px] rotate-[180deg]"
                alt=""
              />
            </li>

            <li
              className="flex justify-between items-center py-[12px] pr-2
                                cursor-pointer border-b-1 border-[#ebebeb]
                                 [body.dark_&]:border-[#FFF4] max-md:py-[15px]"
              onClick={() => {
                setSelectedPage(navigate("/profile/support"));
                setSelectedPage(true);
              }}
            >
              <span className="flex gap-3">
                <img
                  src="https://www.pizza-hut.am/assets/images/app_2/support.svg"
                  className="w-[20px] h-[20px]"
                  alt=""
                />

                <p
                  className="uppercase text-[calc(12px+.3vw)]
                                text-[#515151] [body.dark_&]:text-white"
                >
                  {t("support")}
                </p>
              </span>

              <img
                src="https://www.pizza-hut.am/assets/images/app_2/arrowLightGrey.svg"
                className="w-[10px] rotate-[180deg]"
                alt=""
              />
            </li>

            <li
              className="flex justify-between items-center py-[12px] pr-2
                                cursor-pointer border-b-1 border-[#ebebeb]
                                 [body.dark_&]:border-[#FFF4] max-md:py-[15px]"
              onClick={() => logOut()}
            >
              <span className="flex gap-3">
                <img
                  src="https://www.pizza-hut.am/assets/images/app_2/logOut.svg"
                  className="w-[20px] h-[20px]"
                  alt=""
                />

                <p
                  className="uppercase text-[calc(12px+.3vw)]
                                text-[#515151] [body.dark_&]:text-white"
                >
                  {t("logout")}
                </p>
              </span>

              <img
                src="https://www.pizza-hut.am/assets/images/app_2/arrowLightGrey.svg"
                className="w-[10px] rotate-[180deg]"
                alt=""
              />
            </li>
          </ul>
        </div>

        <div
          className={`w-[70%] h-full flex mt-5 ${
            selectedPage ? "flex w-full" : "hidden"
          }`}
        >
          <div
            className="w-full h-[60px] hidden absolute top-0 left-0 shadow-md
                                justify-center items-center max-md:flex"
          >
            <button
              className="w-[40px] h-[40px] flex items-center justify-center
                           border-1 border-gray-200 rounded-xl outline-none absolute left-5
                           cursor-pointer"
              onClick={() => setSelectedPage(false)}
            >
              <img
                src="https://pizza-hut.am/assets/images/app_2/arrow.svg"
                className="w-[20px] h-[20px]"
              />
            </button>

            <h2 className="text-[17px] text-[#515151] font-[600] uppercase [body.dark_&]:text-white">
              {selectedPageTitle}
            </h2>
          </div>

          {{
            profile: <MyProfile currentUser={currentUser} />,
            orders: <ProfileHistoryOrders />,
            reviews: <ProfileReviews />,
            address: <MyAddress />,
            paymentMethod: <ProfilePayment />,
            support: <ProfileSupport />,
          }[page] || ""}
        </div>
      </section>

      <AboutMenu />
    </>
  );
}

export default Profile;
