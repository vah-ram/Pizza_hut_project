import React, { useState } from "react";

export default function MobileProductCard({ setMenuTask }) {
  const [basketInt, setBasketInt] = useState(1);

  return (
    <>
      <div
        className="fixed inset-0 z-[120] bg-black/40 hidden 
            items-center justify-center max-md:flex"
      >
        <div
          className="w-full h-full relative top-13 rounded-t-[45px] overflow-hidden bg-white 
        [body.dark_&]:bg-[#2e2e2e] pb-60 overflow-y-scroll"
        >
          <span className="w-full h-[50vh]">
            <img
              src="https://bonee.blob.core.windows.net/images/a0bcdc66-7da3-0c1a-3887-396ce30bd05a_3.webp"
              className="w-full h-full object-cover"
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
            Combo for Meat Lovers
          </h2>

          <span className="flex gap-2 items-center pl-[3vw] mt-4">
            <p
              className="text-[#e33b41] text-[25px] font-[500]
                   leading-[15px] 
                                 text-[calc(18px+.3vw)]"
            >
              8,800
            </p>

            <p
              className="text-[#9d9d9d] text-[23px]
                                line-through 
                                text-[calc(16px+.3vw)]"
            >
              11,000
            </p>
          </span>

          <p
            className="mt-5 text-[18px] text-[#9D9D9D]
                        font-[400] pl-[3vw]"
          >
            1 pcs. Pepperoni lovers pizza, 1 pcs. Big Crispers, 2 pcs. Coca-Cola
            0.25
          </p>

          <h3
            className="uppercase text-[calc(16px+.3vw)] font-[600]
                             text-[#515151] [body.dark_&]:text-white mt-5 
                             pl-[3vw]"
          >
            Pizza Type
          </h3>

          <div className="flex gap-2 pizza_types pl-[3vw] mt-2">
            <button
              className="uppercase w-[56px] h-[31px]
                                bg-[#e33b41] text-white rounded-md text-[14px]
                                cursor-pointer 
                                typePizza [.active]:bg-transparent [.active]:text-[#9d9d9d]"
            >
              Pan
            </button>

            <button
              className="uppercase w-[85px] h-[31px]
                                    text-[#e33b41] border border-1
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
