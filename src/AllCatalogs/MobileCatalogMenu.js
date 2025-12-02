import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function MobileCatalogMenu() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <div
        className="w-full h-[55px] px-[15px] py-[7px] 
            hidden items-center 
            fixed shadow-[0px_-2px_7px_0px_gray] 
            bottom-[0] bg-white z-100 max-md:flex 
            [body.dark_&]:shadow-[0px_-2px_7px_0px_#0005] 
            [body.dark_&]:bg-[#2e2e2e] pl-[10vw]"
      >
        <div className="flex flex-col items-center">
          <button
            className="w-[19vw] h-[19vw] flex 
                            flex-col gap-1 items-center justify-center 
                            bg-blue-500 rounded-full 
                            shadow-md cursor-pointer absolute bottom-[35px]"
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

          <p className="text-[calc(14px+.3vw)] text-[#9d9d9d] mt-3">Service</p>
        </div>

        <span
          className="h-full flex flex-col border-l-1 
            border-[#0006] pl-3 ml-10"
        >
          <p className="text-[calc(14px+.3vw)] text-[#9d9d9d]">Total</p>

          <p
            className="text-[calc(16px+.3vw)] font-[700] 
            text-[#515151] leading-[13px] 
            [body.dark_&]:text-[#9d9d9d]"
          >
            1,500
          </p>
        </span>

        <button
          type="button"
          className="flex items-center justify-between 
            bg-[#e33b41] rounded-[10px] px-[10px] py-[10px] 
            min-w-[120px] ml-auto cursor-pointer"
          onClick={() => navigate("/basket")}
        >
          <p className="uppercase text-white">Order</p>

          <span
            className="w-[20px] h-[20px] 
              relative after:content-['0'] after:absolute
              after:w-[17px] after:h-[17px]
              after:flex after:justify-center after:items-center after:text-[#515151]
              after:text-[11px] after:top-[-10px] after:right-[-5px] 
              after:text-white"
          >
            <img
              src="https://pizza-hut.am/assets/images/app_2/basketWhite.svg"
              className="w-full h-full"
            />
          </span>
        </button>
      </div>
    </>
  );
}
