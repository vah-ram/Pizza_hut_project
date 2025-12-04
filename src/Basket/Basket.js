import HeaderMenu from "../HeaderMenu/HeaderMenu";
import AboutMenu from "../AboutMenu/AboutMenu";
import MobileMenu from "../MobileMenuBar/MobileMenu";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import BasketItem from "./BasketItem";
import { useEffect, useState } from "react";
import CountrySelect from "../CountrySelect/CountrySelect";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import Payment from "./Payment";
import Address from "./Address";
import { getProductsBasketHost } from "../utils/Hosts";
import axios from "axios";
import { socket } from "../socket";

function Basket({ isMobile, currentUser, currentLang, selectedAddress }) {
  const navigate = useNavigate();

  const isDineIn = localStorage.getItem("dine_in");

  const [openCalendar, setOpenCalendar] = useState(null);
  const [basketProducts, setBasketProducts] = useState([]);
  const [paymentActive, setPaymentActive] = useState(null);
  const [addressActive, setAddressActive] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);
  const [deletedItem, setDeletedItem] = useState(null);
  const [paymenMethod, setPaymentMethod] = useState(null);

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

  const orderFunc = async() => {
    if(!selectedTime || !selectedAddress) {
      return;
    };

    alert("its ok!")
  }

  useEffect(() => {
    setBasketProducts((prevs) =>
      prevs.filter((item) => {
        return item?.id !== deletedItem?.id;
      })
    );
  }, [deletedItem]);

  //get basket products
  useEffect(() => {

      const callBasket = async () => {
        if (!currentUser || !isDineIn) return;

        const res = await axios.get(getProductsBasketHost, {
          params: { myId: currentUser.id, type: isDineIn },
        });

        if (res.data.status) {
          setBasketProducts(res.data.products);
        } else {
          console.log(res.data.message);
        }
      };

      callBasket();

  }, [currentUser, isDineIn]);

  useEffect(() => {
    setTotalPrice(
      basketProducts?.reduce((total, item) => {
        return total + item.price;
      }, 0)
    );
  }, [basketProducts]);

  return (
    <>
      <MobileMenu currentUser={currentUser} basketProducts={basketProducts} />

      {paymentActive ? <Payment setPaymentActive={setPaymentActive} setPaymentMethod={setPaymentMethod}/> : ""}

      {addressActive ? <Address setAddressActive={setAddressActive} /> : ""}

      {isMobile ? (
        <div
          className="w-full h-[60px] hidden fixed z-[50] top-0 left-0 shadow-md
                                justify-center items-center max-md:flex 
                                bg-white [body.dark_&]:bg-[#2e2e2e]"
        >
          <button
            className="w-[40px] h-[40px] flex items-center justify-center
                           border-1 border-gray-200 rounded-xl outline-none absolute left-5
                           cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <img
              src="https://pizza-hut.am/assets/images/app_2/arrow.svg"
              className="w-[20px] h-[20px]"
            />
          </button>

          <h2 className="text-[17px] text-[#515151] font-[600] uppercase [body.dark_&]:text-white">
            {
              isDineIn === "delivery"
              ? t("delivery_confirmation")
              : t("dinein_confirmation")
            }
          </h2>
        </div>
      ) : (
        <HeaderMenu isMobile={isMobile} currentUser={currentUser} />
      )}

      {basketProducts?.length > 0 ? (
        <section className="w-full h-auto px-[4vw] pt-[120px] max-md:pt-[30px] max-md:pb-[15vh]">
          <span className="w-full flex gap-5 items-center mt-5 [body.isMobile_&]:hidden">
            <a
              href=""
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
            <div
              className={`hidden gap-10 relative max-md:flex 
              ${isDineIn === "delivery" ? "" : "max-md:hidden"}`}
            >
              <span className="flex flex-col">
                <p className="text-[calc(10px+.3vw)] text-[#9d9d9d]">{t("order")}</p>

                <h2
                  className="uppercase text-[calc(16px+.3vw)] font-[600] text-[#515151] 
                [body.dark_&]:text-white"
                >
                  {t("date")}
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
                                    flex items-center justify-between cursor-pointer 
                                     [body.dark_&]:border-[#FFF4]"
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

            <div
              className={`hidden gap-10 relative max-md:flex 
              ${isDineIn === "delivery" ? "" : "max-md:hidden"}`}
            >
              <span className="flex flex-col">
                <p className="text-[calc(10px+.3vw)] text-[#9d9d9d]">{t("order")}</p>

                <h2
                  className="uppercase text-[calc(16px+.3vw)] font-[600] text-[#515151] 
                [body.dark_&]:text-white "
                >
                  {t("time")}
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
                                    flex items-center justify-between cursor-pointer 
                                    [body.dark_&]:border-[#FFF4]"
                >
                  <p className="text-[calc(12px+.3vw)] [body.dark_&]:text-white">
                    {selectedTime}
                  </p>

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
              <h2
                className="hidden max-md:block uppercase mt-2 text-[#515151] font-[600] 
              [body.dark_&]:text-white"
              >
                {t("selected_menu")}
              </h2>

              <div
                className="w-full flex justify-between border-b-1
                         border-[#ebebeb] pb-[15px] max-md:hidden"
              >
                <p className="text-[#9d9d9d] text-[calc(12px+.3vw)]">{t("product")}</p>

                <ul className="flex gap-[5vw]">
                  <li>
                    <p className="text-[#9d9d9d] text-[calc(12px+.3vw)]">
                      {t("quantity")}
                    </p>
                  </li>

                  <li>
                    <p className="text-[#9d9d9d] text-[calc(12px+.3vw)]">
                      {t("price")}
                    </p>
                  </li>

                  <li>
                    <p className="text-[#9d9d9d] text-[calc(12px+.3vw)]">
                      {t("remove")}
                    </p>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col">
                {basketProducts?.map((item, i) => (
                  <BasketItem
                    item={item}
                    index={i}
                    currentUser={currentUser}
                    currentLang={currentLang}
                    setDeletedItem={setDeletedItem}
                  />
                ))}
              </div>

              <span
                className={`w-full flex justify-between py-[5px] 
                            border-b-1 border-[#ebebeb] mt-5 
                            [body.dark_&]:border-[#FFF4] 
                            ${isDineIn === "delivery" ? "" : "max-md:hidden"}`}
              >
                <p className="text-[calc(14px+.3vw)] text-[#9d9d9d]">
                  {t("delivery_fee")}
                </p>

                <a
                  className="text-[calc(14px+.3vw)] text-[#e33b41] font-[600] 
                  cursor-pointer"
                  onClick={() => setAddressActive(true)}
                >
                  {t("select_address")}
                </a>
              </span>

              <span
                className={`w-full flex justify-between py-[5px] 
                            border-b-1 border-[#ebebeb] mt-5 
                            [body.dark_&]:border-[#FFF4] 
                            ${isDineIn === "delivery" ? "hidden" : ""}`}
              >
                <p className="text-[calc(14px+.3vw)] text-[#9d9d9d]">
                  {t("subtotal")}
                </p>

                <p className="text-[calc(14px+.3vw)] text-[#9d9d9d]">3,200</p>
              </span>

              <span
                className={`w-full flex justify-between py-[5px] 
                            border-b-1 border-[#ebebeb]  
                            [body.dark_&]:border-[#FFF4] 
                            ${isDineIn === "delivery" ? "hidden" : ""}`}
              >
                <p className="text-[calc(14px+.3vw)] text-[#9d9d9d]">
                  {t("service_fee_vat")}
                </p>

                <p className="text-[calc(14px+.3vw)] text-[#9d9d9d]">320</p>
              </span>

              <span
                className="w-full flex justify-between py-[5px] 
                            border-b-1 border-[#ebebeb] 
                            [body.dark_&]:border-[#FFF4]"
              >
                <p
                  className="text-[calc(16px+.3vw)] text-[#515151] 
                [body.dark_&]:text-[#9d9d9d] 
                font-[600]"
                >
                  {t("total")}
                </p>

                <a
                  className="text-[calc(16px+.3vw)] text-[#515151] 
                [body.dark_&]:text-[#9d9d9d] 
                font-[600]"
                >
                  {totalPrice?.toLocaleString()}
                </a>
              </span>
            </div>

            <div
              className={`w-[40%] h-full rounded-[15px] border-1 
                    border-[#ebebeb] p-[15px] flex flex-col gap-5 
                    max-md:w-full max-md:border-none max-md:p-0 
                    [body.dark_&]:border-[#FFF] 
                    ${isDineIn === "delivery" ? "" : "max-md:hidden"}`}
            >
              <div className="flex gap-10 relative max-md:hidden">
                <span className="flex flex-col">
                  <p className="text-[calc(10px+.3vw)] text-[#9d9d9d]">{t("order")}</p>

                  <h2
                    className="uppercase text-[calc(12px+.3vw)] font-[600] text-[#515151] 
                  [body.dark_&]:text-white"
                  >
                    {t("date")}
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
                                    flex items-center justify-between cursor-pointer 
                                    [body.dark_&]:border-[#FFF4]"
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
                  <p className="text-[calc(10px+.3vw)] text-[#9d9d9d]">{t("order")}</p>

                  <h2
                    className="uppercase text-[calc(12px+.3vw)] font-[600] text-[#515151] 
                  [body.dark_&]:text-white"
                  >
                    {t("time")}
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
                                    flex items-center justify-between cursor-pointer 
                                    [body.dark_&]:border-[#FFF4]"
                  >
                    <p className="text-[calc(12px+.3vw)] [body.dark_&]:text-white">
                      {selectedTime}
                    </p>

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
                            [body.dark_&]:border-[#FFF4] "
                onClick={() => setPaymentActive(true)}
              >
                <p className="text-[calc(12px+.3vw)] text-[#e33b41]">
                  {paymenMethod ? paymenMethod : t("select_payment_method")}
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
                  {t("delivery_information")}
                </h2>

                <p className="text-[calc(10px+.3vw)] text-[#9d9d9d]">
                  {t("please_add_or_select_address")}
                </p>
              </span>

              <button
                className="w-full px-[10px] py-[10px]
                            bg-[rgba(227,59,65,0.1)] rounded-[15px] border-1 border-red-500  
                            flex items-center justify-between cursor-pointer 
                            max-md:py-[13px] max-md:border-transparent 
                            [body.dark_&]:border-[#FFF4]"
                onClick={() => setAddressActive(true)}
              >
                <p className="text-[calc(12px+.3vw)] text-[#e33b41]">
                  {t("add_address")}
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
                  {t("personal_info")}
                </h2>

                <p className="text-[calc(10px+.3vw)] text-[#9d9d9d]">
                  {t("please_fill_information")}
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
                  placeholder={t("special_instructions_placeholder")}
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
                    placeholder={t("promo_code_placeholder")}
                    className="outline-none border-none ml-2 w-full"
                  />

                  <button
                    className="p-[10px] w-[125px] h-[50px] bg-[#e33b41] rounded-[15px] 
                text-white ml-auto cursor-[pointer]"
                  >
                    {t("apply")}
                  </button>
                </div>

                <span
                  className="flex flex-col text-center p-[15px] pb-[25px] rounded-[12px]
                  border-1 border-[#e33b41] gap-3 mt-6"
                >
                  <p className="uppercase text-[calc(18px+.3vw)] text-[#e33b41]">
                    {t("special_note")}
                  </p>

                  <p className="text-[#9d9d9d] text-[calc(16px+.3vw)]">
                    {t("basket_special_note_text")}
                  </p>
                </span>

                <p
                  className="hidden text-[15px] text-[#515151] mt-5 gap-1 
                    [body.dark_&]:text-white min-2xl:flex"
                >
                  {t("registration_agree_text")}

                  <a
                    href="/terms-and-conditions"
                    className="text-[#e33b41] font-[600]"
                  >
                    {t("registration_terms")}
                  </a>

                  {t("registration_and_text")}

                  <a
                    href="/privacy-policy"
                    className="text-[#e33b41] font-[600]"
                  >
                    {t("registration_privacy")}
                  </a>
                </p>

                <button
                  type="submit"
                  className="w-full max-h-[50px] p-[15px] rounded-[15px] bg-[#e33b41]
                                uppercase text-white cursor-pointer
                                 opacity-75 mt-8" 
                  onClick={() => orderFunc()}
                >
                  {t("submit")}
                </button>
              </div>
            </div>

            <span
              className={`flex flex-col text-center p-[15px] pb-[25px] rounded-[12px]
                border-1 border-[#e33b41] gap-3 mt-6 
                ${isDineIn === "delivery" ? "hidden" : ""}`}
            >
              <p className="uppercase text-[calc(18px+.3vw)] text-[#e33b41]">
                {t("special_note")}
              </p>

              <p className="text-[#9d9d9d] text-[calc(16px+.3vw)]">
                {t("confirm_call_waiter")}
              </p>
            </span>
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
                className="w-[20vw]"
              />

              <p
                className="mt-[1.5rem] text-[calc(12px+.3vw)] 
            font-[600] text-[#515151] uppercase"
              >
                {t("your_basket_empty")}
              </p>

              <button
                className="mt-[2rem] uppercase text-white
               border-none rounded-[15px] flex items-center justify-center 
               bg-[#e33b41] w-[250px] py-4 text-[13px] cursor-pointer"
                onClick={() => navigate("/")}
              >
                {t("menu_btn")}
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
