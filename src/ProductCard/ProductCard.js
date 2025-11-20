import React from "react";

function ProductCard() {
    return (
        <div className="fixed inset-0 z-[100] bg-black/40 flex items-center justify-center bg-[#FFF]">

            <div className="relative w-[80%] h-[80%] rounded-xl bg-[#FFF] p-5">

                <button className="w-[30px] h-[30px] absolute right-0
                    top-[-35px] flex items-center justify-center bg-white rounded-full
                    absolute cursor-pointer">
                    <img
                        src="https://pizza-hut.am/assets/images/app_2/close.svg"
                        className="w-[12px] h-[12px]"/>
                </button>

                <div className="w-full flex gap-5">
                    <img
                        src="https://bonee.blob.core.windows.net/images/3cb64dce-f9bc-6b0a-dd0f-dc785729de67_2.webp"
                        className="w-[40%] h-auto"
                        alt="slider item img"/>

                    <div className="w-[60%] h-auto">

                        <div className="w-full flex justify-between">
                            <h2 className="uppercase text-[calc(18px+.3vw)] text-[#515151] font-[700]
                               mt-2">
                                Combo for Meat Lovers
                            </h2>

                            <button>
                                <img/>
                                    <p className="text-[16px] text-[#515151]">
                                        Share
                                    </p>
                            </button>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
}

export default ProductCard;
