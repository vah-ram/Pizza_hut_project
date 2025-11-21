import React from "react";

function LanguageBar() {

    const closeLanguageBar = () => {
        const body = document.querySelector('body');
            body.classList.remove('languageActive');
    }

    return (
        <>
            <div
                className="w-[300px] h-full fixed bg-white flex flex-col
                right-[-300px] z-100 mt-[-80px] shadow-lg [body.languageActive_&]:translate-x-[-300px]
                 transition duration-300 ease-in-out" >

                <button className="w-[40px] h-[40px] border-1 border-gray-200
                                    rounded-xl cursor-pointer flex items-center
                                    justify-center cursor-pointer absolute right-7
                                    top-7"
                        onClick={closeLanguageBar}>
                    <img
                        src="https://pizza-hut.am/assets/images/app_2/close.svg"
                        className="w-[20px] h-[20px]"/>
                </button>

                <ul className="flex flex-col gap-3 mt-20 ml-5">
                    <li className="flex gap-2 cursor-pointer items-center">
                        <input type="checkbox"/>

                        <img
                            src="https://bonee.blob.core.windows.net/languages/icons/arm.png"
                            className="w-[30px] h-[20px]"/>

                        <p className="uppercase text-[24px] text-[#9D9D9D]">
                            Հայերեն - Hy
                        </p>
                    </li>

                    <li className="flex gap-2 cursor-pointer items-center">
                        <input type="checkbox"/>

                        <img
                            src="https://bonee.blob.core.windows.net/languages/icons/us.png"
                            className="w-[30px] h-[20px]"/>

                        <p className="uppercase text-[24px] text-[#9D9D9D]">
                            English(us) - En
                        </p>
                    </li>

                    <li className="flex gap-2 cursor-pointer items-center">
                        <input type="checkbox"/>

                        <img
                            src="https://bonee.blob.core.windows.net/languages/icons/ru.png"
                            className="w-[30px] h-[20px]"/>

                        <p className="uppercase text-[24px] text-[#9D9D9D]">
                            Русский - Ru
                        </p>
                    </li>
                </ul>
            </div>
        </>
    )
};

export default LanguageBar;