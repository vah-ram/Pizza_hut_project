import React from "react";
import HeaderMenu from "../HeaderMenu/HeaderMenu";

function LoadingToggle() {

    setTimeout(() => {
        const load = document.querySelector('.loadDiv');

        load.classList.add('hidden')
    }, 800);

    return (
        <>
            <HeaderMenu/>

            <div className="mt-[80px] fixed inset-0 z-[100] bg-white flex items-center
             justify-center bg-[#FFF] loadDiv">
                <span
                    className="w-[8rem] h-[8rem] rounded-full border-3
                    border-l-transparent border-r-transparent border-b-transparent
                    border-[#E33B41]
                    animate-spin flex justify-center items-center"
                    >
                    <span className="w-[6rem] h-[6rem] rounded-full border-3
                    border-b-transparent border-t-transparent border-l-transparent border-[#E33B41]
                    animate-spin"/>
                </span>
            </div>
        </>
    )
}

export default LoadingToggle;
