import HeaderMenu from "../HeaderMenu/HeaderMenu";
import AboutMenu from "../AboutMenu/AboutMenu";
import MobileMenu from "../MobileMenuBar/MobileMenu";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import BasketItem from "./BasketItem";
import { useState } from "react";
import CountrySelect from "../CountrySelect/CountrySelect";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

function Basket({ isMobile, currentUser }) {
  const navigate = useNavigate();

  const [openCalendar, setOpenCalendar] = useState(null);
  const [basketProducts, setBasketProducts] = useState(["history", "mi"]);

  const [calendarDate, setCalendarDate] = useState(new Date());

  const [openTime, setOpenTime] = useState(false);
  const [selectedTime, setSelectedTime] = useState("10:00");

  const generateTimes = () => {
    const times = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let min of ["00", "15", "30", "45"]) {
        times.push(`${hour.toString().padStart(2, "0")}:${min}`);
      }
    }
    return times;
  };

  const timeList = generateTimes();

  const { t } = useTranslation();

  return (
    <>
      <MobileMenu currentUser={currentUser}/>
      
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
            />
          </button>

          <h2 className="text-[17px] text-[#515151] font-[600] uppercase [body.dark_&]:text-white">
            Delivery Confirmation
          </h2>
        </div>
      ) : (
        <HeaderMenu isMobile={isMobile} currentUser={currentUser} />
      )}

      {basketProducts.length > 0 ? (
        <section className="w-full h-auto px-[3vw] pt-[120px] max-md:pt-[30px] max-md:pb-[15vh]">
          <span className="w-full flex gap-5 items-center mt-5 [body.isMobile_&]:hidden">
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

            <a className="text-[#e33b41] text-[16px]">{t("basket")}</a>
          </span>

          <div
            className="w-full h-full flex mt-5 gap-[60px] pb-10 pt-5 max-md:flex-col 
          max-md:gap-[20px]"
          >
            <div className="hidden gap-10 relative max-md:flex">
              <span className="flex flex-col">
                <p className="text-[calc(10px+.3vw)] text-[#9d9d9d]">Order</p>

                <h2 className="uppercase text-[calc(16px+.3vw)] font-[600] text-[#515151] 
                [body.dark_&]:text-white">
                  Date
                </h2>
              </span>

              <div
                className="w-[calc(100%-125px)] flex flex-col 
                            items-center absolute right-0"
              >
                <button
                  onClick={() => setOpenCalendar(!openCalendar)}
                  className="w-full px-[10px] py-[13px]
                                    bg-transparent rounded-[15px] border-1 border-[#ebebeb] 
                                    flex items-center justify-between cursor-pointer"
                >
                  <p className="text-[calc(12px+.3vw)] [body.dark_&]:text-white">
                    {calendarDate.toLocaleDateString("hy-AM", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>

                  <img
                    src="https://pizza-hut.am/assets/images/app_2/arrow.svg"
                    className="rotate-[-90deg] w-[8px]"
                  />
                </button>

                {openCalendar && (
                  <DayPicker
                    mode="single"
                    captionLayout="dropdown"
                    pagedNavigation
                    className="custom-calendar bg-white shadow-xl z-[100] p-2 
                    text-[12px]"
                    selected={calendarDate}
                    onSelect={(date) => {
                      if (!date) return;
                      setCalendarDate(date);
                      setOpenCalendar(false);
                    }}
                  />
                )}
              </div>
            </div>

            <div className="hidden gap-10 relative max-md:flex">
              <span className="flex flex-col">
                <p className="text-[calc(10px+.3vw)] text-[#9d9d9d]">Order</p>

                <h2 className="uppercase text-[calc(16px+.3vw)] font-[600] text-[#515151] 
                [body.dark_&]:text-white ">
                  Time
                </h2>
              </span>

              <div
                className="w-[calc(100%-125px)] flex flex-col 
                            items-center absolute right-0"
              >
                <button
                  onClick={() => setOpenTime(!openTime)}
                  className="w-full px-[10px] py-[13px]
                                    bg-transparent rounded-[15px] border-1 border-[#ebebeb] 
                                    flex items-center justify-between cursor-pointer"
                >
                  <p className="text-[calc(12px+.3vw)] [body.dark_&]:text-white">10:00</p>

                  <img
                    src="https://pizza-hut.am/assets/images/app_2/arrow.svg"
                    className="rotate-[-90deg] w-[8px]"
                  />
                </button>

                {openTime && (
                  <div
                    className="absolute top-[60px] bg-white shadow-xl border rounded-xl w-full 
                                max-h-[200px] overflow-y-auto z-[999]"
                  >
                    {timeList.map((time) => (
                      <div
                        key={time}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-[15px]"
                        onClick={() => {
                          setSelectedTime(time);
                          setOpenTime(false);
                        }}
                      >
                        {time}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="w-[60%] flex flex-col max-md:w-full">
              <h2 className="hidden max-md:block uppercase mt-2 text-[#515151] font-[600] 
              [body.dark_&]:text-white">
                Selected menu
              </h2>

              <div
                className="w-full flex justify-between border-b-1
                         border-[#ebebeb] pb-[15px] max-md:hidden"
              >
                <p className="text-[#9d9d9d] text-[calc(12px+.3vw)]">Product</p>

                <ul className="flex gap-[5vw]">
                  <li>
                    <p className="text-[#9d9d9d] text-[calc(12px+.3vw)]">
                      Quantity
                    </p>
                  </li>

                  <li>
                    <p className="text-[#9d9d9d] text-[calc(12px+.3vw)]">
                      Price
                    </p>
                  </li>

                  <li>
                    <p className="text-[#9d9d9d] text-[calc(12px+.3vw)]">
                      Remove
                    </p>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col">
                <BasketItem />

                <BasketItem />
              </div>

              <span
                className="w-full flex justify-between py-[5px] 
                            border-b-1 border-[#ebebeb] mt-5"
              >
                <p className="text-[calc(14px+.3vw)] text-[#9d9d9d]">
                  Delivery Fee
                </p>

                <a
                  href=""
                  className="text-[calc(14px+.3vw)] text-[#e33b41] font-[600]"
                >
                  Select Address
                </a>
              </span>

              <span
                className="w-full flex justify-between py-[5px] 
                            border-b-1 border-[#ebebeb]"
              >
                <p className="text-[calc(16px+.3vw)] text-[#515151]">Total</p>

                <a className="text-[calc(16px+.3vw)] text-[#515151] font-[600]">
                  4,950
                </a>
              </span>
            </div>

            <div
              className="w-[40%] h-full rounded-[15px] border-1 
                    border-[#ebebeb] p-[15px] flex flex-col gap-5 
                    max-md:w-full max-md:border-none max-md:p-0"
            >
              <div className="flex gap-10 relative max-md:hidden">
                <span className="flex flex-col">
                  <p className="text-[calc(10px+.3vw)] text-[#9d9d9d]">Order</p>

                  <h2 className="uppercase text-[calc(12px+.3vw)] font-[600] text-[#515151]">
                    Date
                  </h2>
                </span>

                <div
                  className="w-[calc(100%-125px)] flex flex-col 
                            items-center absolute right-0"
                >
                  <button
                    onClick={() => setOpenCalendar(!openCalendar)}
                    className="w-full px-[10px] py-[10px]
                                    bg-transparent rounded-[15px] border-1 border-[#ebebeb] 
                                    flex items-center justify-between cursor-pointer"
                  >
                    <p className="text-[calc(12px+.3vw)]">
                      {calendarDate.toLocaleDateString("hy-AM", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>

                    <img
                      src="https://pizza-hut.am/assets/images/app_2/arrow.svg"
                      className="rotate-[-90deg] w-[10px]"
                    />
                  </button>

                  {openCalendar && (
                    <DayPicker
                      mode="single"
                      captionLayout="dropdown"
                      pagedNavigation
                      className="custom-calendar bg-white shadow-xl z-[100] 
                      p-2"
                      selected={calendarDate}
                      onSelect={(date) => {
                        if (!date) return;
                        setCalendarDate(date);
                        setOpenCalendar(false);
                      }}
                    />
                  )}
                </div>
              </div>

              <div className="flex gap-10 relative max-md:hidden">
                <span className="flex flex-col">
                  <p className="text-[calc(10px+.3vw)] text-[#9d9d9d]">Order</p>

                  <h2 className="uppercase text-[calc(12px+.3vw)] font-[600] text-[#515151]">
                    Time
                  </h2>
                </span>

                <div
                  className="w-[calc(100%-125px)] flex flex-col 
                            items-center absolute right-0"
                >
                  <button
                    onClick={() => setOpenTime(!openTime)}
                    className="w-full px-[10px] py-[10px]
                                    bg-transparent rounded-[15px] border-1 border-[#ebebeb] 
                                    flex items-center justify-between cursor-pointer"
                  >
                    <p className="text-[calc(12px+.3vw)]">10:00</p>

                    <img
                      src="https://pizza-hut.am/assets/images/app_2/arrow.svg"
                      className="rotate-[-90deg] w-[10px]"
                    />
                  </button>

                  {openTime && (
                    <div
                      className="absolute top-[60px] bg-white shadow-xl border rounded-xl w-full 
                                max-h-[200px] overflow-y-auto z-[999]"
                    >
                      {timeList.map((time) => (
                        <div
                          key={time}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-[15px]"
                          onClick={() => {
                            setSelectedTime(time);
                            setOpenTime(false);
                          }}
                        >
                          {time}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <button
                className="w-full px-[10px] py-[10px]
                            bg-[rgba(227,59,65,0.1)] rounded-[15px] border-1 border-red-500  
                            flex items-center justify-between cursor-pointer 
                            max-md:py-[13px] max-md:border-transparent 
                            [body.dark_&]:border-[#FFF4]"
              >
                <p className="text-[calc(12px+.3vw)] text-[#e33b41]">
                  Select the payment method
                </p>

                <svg
                  width={isMobile ? "15px" : "20px"}
                  height={isMobile ? "15px" : "20px"}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 4L16 12L8 20"
                    stroke="url(#grad)"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="grad"
                      x1="8"
                      y1="4"
                      x2="16"
                      y2="20"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FF5A5A" />
                      <stop offset="1" stop-color="#FF914D" />
                    </linearGradient>
                  </defs>
                </svg>
              </button>

              <span className="flex flex-col mt-1">
                <h2
                  className="uppercase text-[calc(12px+.3vw)] 
                [body.dark_&]:text-white max-md:text-[calc(16px+.3vw)]"
                >
                  Delivery Information
                </h2>

                <p className="text-[calc(10px+.3vw)] text-[#9d9d9d]">
                  Please add or select delivery address
                </p>
              </span>

              <button
                className="w-full px-[10px] py-[10px]
                            bg-[rgba(227,59,65,0.1)] rounded-[15px] border-1 border-red-500  
                            flex items-center justify-between cursor-pointer 
                            max-md:py-[13px] max-md:border-transparent 
                            [body.dark_&]:border-[#FFF4]"
              >
                <p className="text-[calc(12px+.3vw)] text-[#e33b41]">
                  Add Address
                </p>

                <svg
                  width={isMobile ? "15px" : "20px"}
                  height={isMobile ? "15px" : "20px"}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 4L16 12L8 20"
                    stroke="url(#grad)"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="grad"
                      x1="8"
                      y1="4"
                      x2="16"
                      y2="20"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FF5A5A" />
                      <stop offset="1" stop-color="#FF914D" />
                    </linearGradient>
                  </defs>
                </svg>
              </button>

              <span className="flex flex-col mt-1">
                <h2
                  className="uppercase text-[calc(12px+.3vw)] 
                [body.dark_&]:text-white max-md:text-[calc(16px+.3vw)]"
                >
                  Personal Information
                </h2>

                <p className="text-[calc(10px+.3vw)] text-[#9d9d9d]">
                  Please fill the information
                </p>
              </span>

              <div className="w-full flex flex-col">
                <div className="flex gap-4">
                  <div className="w-[110px] mt-2 pointer-events-none">
                    <CountrySelect />
                  </div>

                  <div className="w-[90%]">
                    <div
                      className="w-full mt-2 flex gap-5 items-center px-3 py-4 rounded-[15px]
                                border border-1 border-gray-200 [body.dark_&]:border-[#FFF4]"
                    >
                      <input
                        type="text"
                        value={currentUser ? currentUser.phonenumber : ""}
                        className="border-none outline-none w-full
                                            [body.dark_&]:text-white text-[#515151]"
                        maxLength={50}
                      />
                    </div>
                  </div>
                </div>

                <div
                  className="w-full mt-6 flex gap-5 items-center px-3 py-4 rounded-[15px]
                            border border-1 border-gray-200 max-md:w-full [body.dark_&]:border-[#FFF4]"
                >
                  <input
                    type="text"
                    value={
                      currentUser
                        ? `${currentUser.name} ${currentUser.surname}`
                        : ""
                    }
                    className="border-none outline-none w-full
                                    [body.dark_&]:text-white text-[#515151]"
                    maxLength={50}
                    disabled={true}
                  />
                </div>

                <div
                  className="w-full mt-6 flex gap-5 items-center px-3 py-4 rounded-[15px]
                            border border-1 border-gray-200 max-md:w-full [body.dark_&]:border-[#FFF4]"
                >
                  <input
                    type="text"
                    value={currentUser ? currentUser.email : ""}
                    className="border-none outline-none w-full
                                    [body.dark_&]:text-white text-[#515151]"
                    maxLength={50}
                    disabled={true}
                  />
                </div>

                <textarea
                  placeholder="Add any special instructions"
                  className="w-full h-[150px] mt-6 border-1 
                    border-[#ebebeb] p-[15px] rounded-[15px] 
                    outline-none [body.dark_&]:text-white 
                    [body.dark_&]:border-[#FFF4]"
                ></textarea>

                <div
                  className="flex border-1 border-[#ebebeb] p-[15px]
               rounded-[15px] gap-2 mt-8 items-center [body.dark_&]:border-[#FFF4] 
               [body.dark_&]:text-white"
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D00000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <rect x="3" y="9" width="18" height="12" rx="2" />
                    <line x1="3" y1="13" x2="21" y2="13" />
                    <line x1="12" y1="9" x2="12" y2="21" />
                    <path d="M7 6c0 1.66 1.79 3 5 3s5-1.34 5-3-1-3-3-3c-1.5 0-2.5 1-2 3" />
                  </svg>

                  <input
                    type="text"
                    placeholder="Do you have promo code?"
                    className="outline-none border-none ml-2 w-full"
                  />

                  <button
                    className="p-[10px] w-[125px] h-[50px] bg-[#e33b41] rounded-[15px] 
                text-white ml-auto cursor-[pointer]"
                  >
                    Apply
                  </button>
                </div>

                <span
                  className="flex flex-col text-center p-[15px] pb-[25px] rounded-[12px]
               border-1 border-[#e33b41] gap-3 mt-6"
                >
                  <p className="uppercase text-[calc(18px+.3vw)] text-[#e33b41]">
                    Special note
                  </p>

                  <p className="text-[#9d9d9d] text-[calc(16px+.3vw)]">
                    Clicking “Submit”, you agree to the general terms,
                    conditions <br />
                    and Privacy Policy of pizza-hut.am
                  </p>
                </span>

                <button
                  type="submit"
                  className="w-full max-h-[50px] p-[15px] rounded-[15px] bg-[#e33b41]
                                uppercase text-white cursor-pointer
                                 opacity-75 mt-10"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <>
          <MobileMenu />

          <div
            className="mt-[80px] w-full h-[100vh] flex pt-10  
        justify-center"
          >
            <div className="flex flex-col items-center">
              <img
                src="https://www.pizza-hut.am/assets/images/app_2/basketEmpty.svg"
                className="w-[35vw]"
              />

              <p
                className="mt-[1.5rem] text-[calc(12px+.3vw)] 
            font-[600] text-[#515151] uppercase"
              >
                Your Basket is Empty
              </p>

              <button
                className="mt-[2rem] uppercase text-white
               border-none rounded-[15px] flex items-center justify-center 
               bg-[#e33b41] w-[250px] py-4 text-[13px] cursor-pointer"
                onClick={() => navigate("/")}
              >
                Menu
              </button>
            </div>
          </div>
        </>
      )}

      <AboutMenu />
    </>
  );
}

export default Basket;
