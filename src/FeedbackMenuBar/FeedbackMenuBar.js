import React from "react";

function FeedbackMenuBar() {

    const closeMenuBar = () => {
        const body = document.querySelector('body');
        body.classList.remove('menuActive');
    }

    return (
        <>
            <div
                className="w-[300px] h-full fixed bg-white flex flex-col
                right-[-300px] z-[200] mt-[-80px] shadow-lg
                [body.menuActive_&]:translate-x-[-300px]
                 transition duration-300 ease-in-out max-md:mt-[-60px]">

                <button className="w-[40px] h-[40px] border-1 border-gray-200
                                    rounded-xl cursor-pointer flex items-center
                                    justify-center cursor-pointer absolute right-7
                                    top-7"
                        onClick={closeMenuBar}>
                    <img
                        src="https://pizza-hut.am/assets/images/app_2/close.svg"
                        className="w-[20px] h-[20px]"/>
                </button>

                FEEdback
            </div>
        </>
    )
};

export default FeedbackMenuBar;