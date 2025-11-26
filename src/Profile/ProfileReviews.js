import React from "react";

function ProfileReviews() {
  return (
    <>
      <div
        className="w-full h-full flex flex-col items-center
                    justify-center max-md:mt-[10vw]"
      >
        <img
          src="https://pizza-hut.am/assets/images/app_2/orders.svg"
          className="w-[40%] max-w-[250px]"
        />

        <h2
          className="text-[calc(16px+.3vw)] uppercase mt-[1.5rem]
                        font-[600] text-[#515151] [body.dark_&]:text-white"
        >
          There is no orders
        </h2>

        <button
          className="w-[70%] max-w-[250px] h-[62px] flex items-center
                     justify-center bg-[#E33B41] rounded-2xl text-white
                     text-[21px] mt-[40px] uppercase"
        >
          Menu
        </button>
      </div>
    </>
  );
}

export default ProfileReviews;
