import React from "react";

function ProductCard() {
    return (
        <div className="fixed inset-0 z-[100] bg-black/40 flex items-center justify-center bg-[#FFF]">

            <div className="relative w-[80%] h-[85%] rounded-xl bg-[#FFF] p-5">

                <button className="w-[30px] h-[30px] absolute right-0
                    top-[-35px] flex items-center justify-center bg-white rounded-full
                    absolute cursor-pointer">
                    <img
                        src="https://pizza-hut.am/assets/images/app_2/close.svg"
                        className="w-[12px] h-[12px]"/>
                </button>

                <div className="w-full flex gap-5">

                    <div className="w-[40%] h-auto">
                        <img
                            src="https://bonee.blob.core.windows.net/images/3cb64dce-f9bc-6b0a-dd0f-dc785729de67_2.webp"
                            className="w-[60vmin] h-[60vmin]" 
                            alt="slider item img"/>
                    </div>

                    <div 
                        className="w-[60%] h-full px-5 flex flex-col">

                        <div className="w-full flex justify-between">
                            <h2 className="uppercase text-[calc(18px+.3vw)] 
                                text-[#515151] font-[700] mt-2">
                                Combo for Meat Lovers
                            </h2>

                            <button 
                                className="w-[84px] h-[32px] flex gap-2 items-center  
                                justify-center border border-1 
                                border-[#e33b41] rounded-md cursor-pointer">

                                <img 
                                    src="/Img/share-icon.png"
                                    className="w-[15px] h-[15px]"/>

                                <p className="text-[16px] text-[#515151]">
                                    Share
                                </p>

                            </button>
                        </div>

                         <p 
                            className="text-[20px] text-[#9D9D9D] 
                            font-[600] mt-3">
                            -20%
                        </p>

                        <p className="mt-5 text-[18px] text-[#9D9D9D] 
                        font-[400]">
                            Meat Lovers 33 sm. (Tomato sauce, mozzarella cheese, pepperoni, beef, bacon, ham.)
                            Spicy Meat  33 sm. (Tomato sauce, mozzarella cheese, ham, pepperoni, jalapeno pepper.)
                            Chicken BBQ 33 sm. (Barbeque sauce, chicken breast, bacon, onion, mushrooms, Bulgarian pepper, mozzarella cheese.)
                        </p>

                        <h3 
                            className="uppercase text-[calc(16px+.3vw)] font-[600]
                             text-[#515151] mt-20">
                            Pizza Type
                        </h3>

                        <div className="flex gap-2 mt-3">
                            <button 
                                className="uppercase w-[56px] h-[31px]
                                bg-[#e33b41] text-white rounded-md text-[14px] 
                                cursor-pointer">
                                Pan
                            </button>

                            <button 
                                className="uppercase w-[85px] h-[31px]
                                text-[#9D9D9D] border border-1 
                                border-gray-200 rounded-md text-[14px]
                                cursor-pointer">
                                Classic
                            </button>
                        </div>

                        <form className="w-full flex flex-col">

                            <h3 className="uppercase text-[calc(12px+.3vw)] font-[600] 
                             text-[#515151] mt-7">
                                Add any special instructions
                            </h3>

                            <textarea 
                                className="outline-none p-3 border
                                border-1 border-[#9D9D9D] rounded-md
                                mt-3"
                                placeholder="Additional Comment">

                            </textarea>

                            <div className="w-full flex justify-between">

                            </div>

                        </form>

                    </div>
                </div>

            </div>

        </div>
    );
}

export default ProductCard;
