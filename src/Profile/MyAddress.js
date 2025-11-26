import React from "react";

function MyAddress() {
    return (
        <>
            <div className="w-full flex justify-center pt-10 max-md:pt-0">
                <button
                    type="submit"
                    className="w-[90%] max-h-[50px] p-[15px] rounded-[15px] bg-[#e33b41]
                            uppercase text-white mt-2 cursor-pointer
                            hover:opacity-90">
                    + Add Address
                </button>
            </div>
        </>
    )
};

export default MyAddress;