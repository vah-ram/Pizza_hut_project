import React from "react";

export default function Payment({ setPaymentActive }) {
    return (
        <>
            <div className="fixed inset-0 z-[150] bg-black/45 flex
                items-center justify-center 
                p-[15px]">

                <div className="w-[50vw] h-[50vh] max-w-[500px] p-[15px] rounded-[15px] 
                bg-white relative max-md:fixed max-md:bottom-0 max-md:w-full 
                max-sm:max-w-full max-md:rounded-[6vw]">

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
                        text-[#515151] uppercase mt-16">
                        Payment Methods
                    </h2>

                    <button className="border-[#ebebeb]">
                        <img/>
                        <p>Cash</p>
                    </button>
                    
                </div>

            </div>
        </>
    )
}