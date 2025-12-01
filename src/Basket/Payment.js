import React from "react";

export default function Payment({ setPaymentActive }) {
  return (
    <>
      <div
        className="fixed inset-0 z-[150] bg-black/45 flex
                items-center justify-center 
                p-[15px]"
      >
        <div
          className="w-[50vw] max-w-[500px] p-[15px] rounded-[15px] 
                bg-white relative max-md:fixed max-md:bottom-0 max-md:w-full 
                max-sm:max-w-full max-md:rounded-[6vw] 
                pb-10 [body.dark_&]:bg-[#2e2e2e]"
        >
          <button
            className="w-[40px] h-[40px] flex items-center justify-center
                        border-1 border-gray-200 rounded-xl outline-none absolute left-5
                        cursor-pointer"
            onClick={() => setPaymentActive(false)}
          >
            <img
              src="https://pizza-hut.am/assets/images/app_2/close.svg"
              className="w-[30%]"
            />
          </button>

          <h2
            className="font-[600] text-[calc(16px+.3vw)] 
                        text-[#515151] uppercase mt-16 
                        [body.dark_&]:text-white"
          >
            Payment Methods
          </h2>

          <button
            className="w-full max-h-[60px] border-1 
            border-[#ebebeb] mt-[40px] p-[15px] 
            rounded-[15px] flex items-center 
            gap-5 cursor-pointer"
          >
            <svg width="25" height="290" viewBox="0 0 370 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Money icon">
                <rect x="10" y="30" width="350" height="230" rx="28" ry="28" fill="none" stroke="#646464ff" stroke-width="22"/>
                <circle cx="185" cy="155" r="44" fill="none" stroke="#646464ff" stroke-width="20"/>
                <rect x="52" y="85" width="35" height="35" rx="10" ry="10" fill="#646464ff"/>
                <rect x="52" y="190" width="35" height="35" rx="10" ry="10" fill="#646464ff"/>
                <rect x="278" y="85" width="35" height="35" rx="10" ry="10" fill="#646464ff"/>
                <rect x="278" y="190" width="35" height="35" rx="140" ry="10" fill="#646464ff"/>
                <circle cx="170" cy="150" r="6" fill="#646464ff"/>
                <circle cx="200" cy="160" r="6" fill="#646464ff"/>
            </svg>

            <p className="capitalize text-[#515151] [body.dark_&]:text-white"
            >Cash</p>
          </button>

          <button
            className="w-full max-h-[60px] border-1 
            border-[#ebebeb] mt-5 p-[15px] 
            rounded-[15px] flex items-center 
            gap-5 cursor-pointer"
          >
            <img 
                src="https://play-lh.googleusercontent.com/ixddLgBD0FPvyQo1KpVhy7LzuNmKM2iqX0JlF9I3Qt4Vsh77RWmcs1ynD8kCwRoQCg" 
                className="w-[25px]"/>

            <p className="capitalize text-[#515151] [body.dark_&]:text-white"
            >Ineco</p>
          </button>

          <button
            className="w-full max-h-[60px] border-1 
            border-[#ebebeb] mt-5 p-[15px] 
            rounded-[15px] flex items-center 
            gap-5 cursor-pointer"
          >
            <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToGPwonm-hJJoN5aZU4ek9Tiv3ykwmJbP7b6w7hTvA77JHgXJor_jb7oMTstHM86h7z2Y&usqp=CAU" 
                className="w-[25px] rounded-md"/>

            <p className="capitalize text-[#515151] [body.dark_&]:text-white"
            >Idram</p>
          </button>

          <button
            className="w-full max-h-[60px] border-1 
            border-[#ebebeb] mt-5 p-[15px] 
            rounded-[15px] flex items-center 
            gap-5 cursor-pointer"
          >
            <svg width="25" height="290" viewBox="0 0 370 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Money icon">
                <rect x="10" y="30" width="350" height="230" rx="28" ry="28" fill="none" stroke="#646464ff" stroke-width="22"/>
                <circle cx="185" cy="155" r="44" fill="none" stroke="#646464ff" stroke-width="20"/>
                <rect x="52" y="85" width="35" height="35" rx="10" ry="10" fill="#646464ff"/>
                <rect x="52" y="190" width="35" height="35" rx="10" ry="10" fill="#646464ff"/>
                <rect x="278" y="85" width="35" height="35" rx="10" ry="10" fill="#646464ff"/>
                <rect x="278" y="190" width="35" height="35" rx="140" ry="10" fill="#646464ff"/>
                <circle cx="170" cy="150" r="6" fill="#646464ff"/>
                <circle cx="200" cy="160" r="6" fill="#646464ff"/>
            </svg>


            <p className="capitalize text-[#515151] [body.dark_&]:text-white"
            >POS Terminal</p>
          </button>
        </div>
      </div>
    </>
  );
}
