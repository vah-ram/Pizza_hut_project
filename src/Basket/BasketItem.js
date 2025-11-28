import React, { useState } from "react";

function BasketItem() {
  const [basketInt, setBasketInt] = useState(1);

  return (
    <>
      <div
        className="flex py-[15px] border-b-1 border-[#ebebeb] 
      [body.dark_&]:border-[#FFF4]"
      >
        <span
          className="flex w-40 h-40 bg-[url('https://bonee.blob.core.windows.net/images/a61c237e-3985-1857-7919-e8d3b55e058a_1.webp')] 
                    bg-cover rounded-[25px] shrink-0"
        />

        <div className="w-full flex justify-between px-[15px] relative">
          <h2
            className="text-[#515151] text-[calc(12px+.3vw)] 
                        uppercase font-[600] [body.dark_&]:text-white"
          >
            CHICKENBURGER DUO
          </h2>

          <ul className="h-full flex items-center gap-[5vw]">
            <li className="max-md:absolute right-0 bottom-0">
              <div
                className="flex gap-[16px] text-[calc(20px+.3vw)] 
                            items-center max-md:bg-[#e8f0fa] 
                            max-md:rounded-[12px]"
              >
                <button
                  className="cursor-pointer text-[#e33b41] max-md:text-white max-md:bg-[#e33b41] 
                  max-md:w-[34px] max-md:h-[34px] max-md:rounded-[12px] 
                  [body.dark_&]:text-white"
                  onClick={(evt) => {
                    evt.preventDefault();
                    setBasketInt((prev) => Math.max(1, prev - 1));
                  }}
                >
                  –
                </button>

                <p className="text-[calc(12px+.3vw)] max-md:text-[#e33b41] 
                [body.dark_&]:text-white">
                  {basketInt}
                </p>

                <button
                  className="cursor-pointer text-[#e33b41] max-md:text-white max-md:bg-[#e33b41] 
                  max-md:w-[34px] max-md:h-[34px] max-md:rounded-[12px] 
                  [body.dark_&]:text-white"
                  onClick={(evt) => {
                    evt.preventDefault();
                    setBasketInt((prev) => prev + 1);
                  }}
                >
                  +
                </button>
              </div>
            </li>

            <li className="max-md:absolute left-[15px] bottom-0">
              <p
                className="text-[calc(12px+.3vw)] font-[600] 
                            text-[#515151] [body.dark_&]:text-white"
              >
                3,900
              </p>
            </li>

            <li>
              <button
                className="w-[30px] h-[30px] rounded-[6px] 
                                border-1 border-[#ebebeb] flex items-center 
                                justify-center cursor-pointer 
                                max-md:hidden"
              >
                <img
                  src="https://pizza-hut.am/assets/images/app_2/close.svg"
                  className="w-[8px]"
                />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default BasketItem;
