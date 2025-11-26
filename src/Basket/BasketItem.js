import React, { useState } from "react";

function BasketItem() {
  const [basketInt, setBasketInt] = useState(1);

  return (
    <>
      <div className="flex py-[15px] border-b-1 border-[#ebebeb]">
        <span
          className="flex w-40 h-40 bg-[url('https://bonee.blob.core.windows.net/images/a61c237e-3985-1857-7919-e8d3b55e058a_1.webp')] 
                    bg-cover rounded-[25px] shrink-0"
        />

        <div className="w-full flex justify-between px-[15px]">
          <h2
            className="text-[#515151] text-[calc(12px+.3vw)] 
                        uppercase font-[600]"
          >
            CHICKENBURGER DUO
          </h2>

          <ul className="h-full flex items-center gap-[5vw]">
            <li>
              <div
                className="flex gap-[16px] text-[calc(20px+.3vw)] 
                            items-center"
              >
                <button
                  className="cursor-pointer text-[#e33b41]"
                  onClick={(evt) => {
                    evt.preventDefault();
                    setBasketInt((prev) => Math.max(1, prev - 1));
                  }}
                >
                  –
                </button>

                <p className="text-[calc(12px+.3vw)]">{basketInt}</p>

                <button
                  className="cursor-pointer text-[#e33b41]"
                  onClick={(evt) => {
                    evt.preventDefault();
                    setBasketInt((prev) => prev + 1);
                  }}
                >
                  +
                </button>
              </div>
            </li>

            <li>
              <p
                className="text-[calc(12px+.3vw)] font-[600] 
                            text-[#515151]"
              >
                3,900
              </p>
            </li>

            <li>
              <button
                className="w-[30px] h-[30px] rounded-[6px] 
                                border-1 border-[#ebebeb] flex items-center 
                                justify-center cursor-pointer"
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
