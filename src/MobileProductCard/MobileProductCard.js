import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import i18next from "i18next";

export default function MobileProductCard({ setMenuTask, currentProduct }) {
  const navigate = useNavigate();
  const [basketInt, setBasketInt] = useState(1);
  const [currentLang, setCurrentLang] = useState(i18next.language);
  const [viewImage, setViewImage] = useState(null);

  useEffect(() => {
    const pizzaTypes = document.querySelectorAll(".mobile_pizza_types .typePizza");

    pizzaTypes.forEach((item, i) => {
      item.addEventListener("click", () => {
        pizzaTypes.forEach((prevs) => {
          prevs.classList.remove("active");
        });

        item.classList.add("active");
      });
    });
  }, []);

  useEffect(() => {
    const onLangChange = (lng) => {
      setCurrentLang(lng);
    };

    i18next.on("languageChanged", onLangChange);

    return () => i18next.off("languageChanged", onLangChange);
  }, []);

  return (
    <>

    {viewImage ? (
        <div
          className="fixed inset-0 z-[150] bg-black/95 flex
            items-center justify-center 
            p-[15px]"
        >
          <img
            src={currentProduct?.image_url}
            className={`
                w-auto h-auto object-cover group-hover:opacity-80 
                ${currentProduct?.product_type === "beverages" ? "scale-70" : ""}
              `}
            alt="slider item img"
          />

          <button
            className="w-[40px] h-[40px] absolute right-[15px] 
                        top-[15px] flex items-center justify-center rounded-xl
                        absolute cursor-pointer border-1 border-[#ebebeb]"
            onClick={() => setViewImage(false)}
          >
            <img
              src="https://pizza-hut.am/assets/images/app_2/close.svg"
              className="w-[16px] h-[16px]"
            />
          </button>
        </div>
      ) : (
        ""
      )}

      <div
        className="fixed inset-0 z-[120] bg-black/40 hidden 
            items-center justify-center max-md:flex"
      >
        <div
          className="w-full h-full relative top-13 rounded-t-[45px] overflow-hidden bg-white 
        [body.dark_&]:bg-[#2e2e2e] pb-60 overflow-y-scroll"
        >
          <span 
            className="w-full h-[50vh] cursor-pointer flex item-center justify-center" 
            onClick={() => setViewImage(true)}>
            <img
              src={currentProduct?.image_url}
              className={` 
                ${currentProduct?.product_type !== "beverages" ? "object-cover w-full h-full" : ""}`}
            />
          </span>

          <button
            className="w-[40px] h-[40px] bg-[rgba(0,0,0,0.5)] rounded-[12px] 
            flex items-center justify-center fixed left-[15px] top-17 
            cursor-pointer"
          >
            <img
              src="https://pizza-hut.am/assets/images/app_2/logOutWhite.svg"
              className="w-[18px] h-[18px]"
            />
          </button>

          <button
            onClick={() => setMenuTask(false)}
            className="w-[40px] h-[40px] bg-[rgba(0,0,0,0.5)] rounded-[12px] 
            flex items-center justify-center fixed right-[25px] top-17 
            cursor-pointer"
          >
            <img
              src="https://pizza-hut.am/assets/images/app_2/closeWhite.svg"
              className="w-[18px] h-[18px]"
            />
          </button>

          <h2
            className="uppercase text-[calc(18px+.3vw)]
                            text-[#515151] font-[700] mt-2 [body.dark_&]:text-white 
                            pl-[3vw] mt-4"
          >
            {currentLang === "en"
              ? currentProduct?.title
              : currentLang === "ru"
              ? currentProduct?.title_ru
              : currentLang === "am"
              ? currentProduct?.title_am
              : ""
            }
          </h2>

          <span className="flex gap-2 items-center pl-[3vw] mt-4">
            <p
              className="text-[#e33b41] text-[25px] font-[500]
                   leading-[15px] 
                                 text-[calc(18px+.3vw)]"
            >
              {currentProduct?.price.toLocaleString()}
            </p>

            <p
              className={`text-[#9d9d9d] text-[23px]
                                line-through 
                                text-[calc(16px+.3vw)] 
                                ${currentProduct?.old_price === 0 ? 'hidden' : ''}`}
            >
              {currentProduct?.old_price.toLocaleString()}
            </p>
          </span>

          <p
            className="mt-5 text-[18px] text-[#9D9D9D]
                        font-[400] pl-[3vw]"
          >
            {currentLang === "en"
              ? currentProduct?.description
              : currentLang === "ru"
              ? currentProduct?.description_ru
              : currentLang === "am"
              ? currentProduct?.description_am
              : ""
            }
          </p>

          <h3
            className="uppercase text-[calc(16px+.3vw)] font-[600]
                             text-[#515151] [body.dark_&]:text-white mt-5 
                             pl-[3vw]"
          >
            Pizza Type
          </h3>

          <div className="flex gap-2 mobile_pizza_types pl-[3vw] mt-2">
            <button
              className="uppercase px-[15px] py-[5px] 
                          text-[#9D9D9D] border border-1
                          border-gray-200 rounded-md text-[14px]
                          cursor-pointer [body.dark_&]:border-[#9D9D9D] 
                          typePizza [.active]:bg-[#e33b41] [.active]:text-white 
                          active"
            >
              Pan
            </button>

            <button
              className="uppercase px-[15px] py-[5px] 
                          text-[#9D9D9D] border border-1
                          border-gray-200 rounded-md text-[14px]
                          cursor-pointer [body.dark_&]:border-[#9D9D9D] 
                          typePizza [.active]:bg-[#e33b41] [.active]:text-white"
            >
              Classic
            </button>
            
          </div>

          <h3
            className="uppercase text-[calc(12px+.3vw)] font-[600]
                        text-[#515151] mt-8 [body.dark_&]:text-white 
                        pl-[3vw]"
          >
            Add any special instructions
          </h3>

          <textarea
            className="outline-none p-3 border
                                border-1 border-[#9D9D9D] rounded-xl
                                mt-3 [body.dark_&]:text-white 
                                w-[calc(100%-5vw)] ml-[3vw] "
            placeholder="Additional Comment"
          ></textarea>
        </div>

        <div
          className="w-full h-[60px] bg-white fixed bottom-0 
          shadow-[-10px_10px_6px_10px_gray] [body.dark_&]:shadow-[-10px_10px_6px_10px_#0015] 
          [body.dark_&]:bg-[#2e2e2e] flex items-center justify-between px-[2vw]"
        >
          <span className="flex flex-col">
            <p className="text-[calc(14px+.3vw)] text-[#9d9d9d]">Total</p>

            <p className="font-[700] text-[calc(16px+.3vw)] text-[#9d9d9d]">
              3,000
            </p>
          </span>

          <div
            className="flex gap-[16px] text-[calc(20px+.3vw)] 
                            items-center max-md:bg-[#e8f0fa] 
                            max-md:rounded-[12px]"
          >
            <button
              className={`cursor-pointer text-[#e33b41] max-md:text-white max-md:bg-[#e33b41] 
                  max-md:w-[34px] max-md:h-[34px] max-md:rounded-[12px]
                   ${basketInt === 1 ? "opacity-75" : ""}`}
              onClick={(evt) => {
                evt.preventDefault();
                setBasketInt((prev) => Math.max(1, prev - 1));
              }}
            >
              –
            </button>

            <p className="text-[calc(12px+.3vw)] max-md:text-[#e33b41]">
              {basketInt}
            </p>

            <button
              className="cursor-pointer text-[#e33b41] max-md:text-white max-md:bg-[#e33b41] 
                  max-md:w-[34px] max-md:h-[34px] max-md:rounded-[12px]"
              onClick={(evt) => {
                evt.preventDefault();
                setBasketInt((prev) => prev + 1);
              }}
            >
              +
            </button>
          </div>

          <button
            className="w-[120px] h-[40px] px-[15px] py-[5px] cursor-pointer 
            rounded-[12px] bg-[#e33b41] flex items-center justify-between"
            onClick={() => {
              navigate("/basket");
            }}
          >
            <p className="uppercase text-white">Add</p>

            <img
              src="https://pizza-hut.am/assets/images/app_2/basketPlus.svg"
              className="w-[17px] h-[17px]"
            />
          </button>
        </div>
      </div>
    </>
  );
}
