import React from "react";

function ProfilePayment() {
  return (
    <>
      <div className="w-full h-full pl-[5vw] pt-2 max-md:pt-0">
        <h2 className="uppercase text-[#e33b41] text-[calc(16px+.3vw)]">
          Credit Cards
        </h2>

        <span className="flex gap-2 mt-2">
          <img
            src="https://pizza-hut.am/assets/images/app_2/secure.svg"
            className="w-[calc(14px+.3vw)]"
          />

          <p className="uppercase text-[calc(10px+.3vw)] text-[#515151]">
            Card details are stored securely by Bank
          </p>
        </span>

        <button
          type="submit"
          className="w-[90%] max-h-[50px] p-[15px] rounded-[15px] bg-[#e33b41]
                            uppercase text-white mt-8 cursor-pointer
                            hover:opacity-90"
        >
          + Add Card
        </button>
      </div>
    </>
  );
}

export default ProfilePayment;
